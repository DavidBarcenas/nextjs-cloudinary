import nc from 'next-connect';
import multer from 'multer';
import DatauriParser from 'datauri/parser';
import { v2 as cloudinary } from 'cloudinary';
import type { RequestFile } from '@/interfaces/file';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedRequest {
  file: RequestFile;
}

interface ErrorAPI {
  name: string;
  message: string;
  http_code: number;
}

function isACreditsError(obj: unknown): obj is ErrorAPI {
  if (obj && typeof obj === 'object') {
    return 'name' in obj && 'message' in obj && 'http_code' in obj;
  }
  return false;
}

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (error, req, res: NextApiResponse) => {
    let errorMessage = 'Lo sentimos ha ocurrido un error';
    if (error instanceof multer.MulterError) {
      errorMessage = 'La propiedad "File" es requerida';
    }
    res.status(500).end(errorMessage);
  },

  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end('No encontrado');
  },
})
  .use(multer().single('file'))
  .post<ExtendedRequest, NextApiResponse>(async (req, res) => {
    const image = req.file;
    const parser = new DatauriParser();

    try {
      const base64Image = parser.format(image.originalname, image.buffer);

      if (!base64Image.content) {
        throw new Error();
      }

      const response = await cloudinary.uploader.upload(base64Image.content, {
        public_id: base64Image.fileName,
        background_removal: 'cloudinary_ai',
        resource_type: 'image',
      });

      if (!response.secure_url) {
        throw new Error();
      }

      return res.json({ error: null, data: response });
    } catch (error) {
      console.error('[API ERROR] ', error);
      let message;

      if (error instanceof Error) message = error.message;

      if (isACreditsError(error)) {
        console.log('entra a qui', error);
        message = 'Lo sentimos, en este momento no es posible eliminar el fondo';
      }
      return res.status(500).json({ error: message, data: null });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
