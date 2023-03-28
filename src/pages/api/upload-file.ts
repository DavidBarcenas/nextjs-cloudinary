import nc from 'next-connect';
import multer from 'multer';
import DatauriParser from 'datauri/parser';
import cloudinary from '@/config/cloudinary';
import { errorMessages } from '@/config/constants';
import type { RequestFile } from '@/interfaces/file';
import { NextApiRequest, NextApiResponse } from 'next';

interface ExtendedRequest {
  file: RequestFile;
}

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (error, req, res: NextApiResponse) => {
    let errorMessage = errorMessages.serverError;
    if (error instanceof multer.MulterError) {
      errorMessage = errorMessages.fileInBody;
    }
    res.status(500).end(errorMessage);
  },

  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end(errorMessages.methodNotAllowed);
  },
})
  .use(multer().single('file'))
  .post<ExtendedRequest, NextApiResponse>(async (req, res) => {
    const image = req.file;
    const parser = new DatauriParser();

    try {
      const base64Image = parser.format(image.originalname, image.buffer);

      if (!base64Image.content) {
        throw new Error(errorMessages.unparsedImage);
      }

      const response = await cloudinary.uploader.upload(base64Image.content, {
        public_id: base64Image.fileName,
        resource_type: 'image',
      });

      if (!response.public_id) {
        throw new Error(errorMessages.requestFailure);
      }

      return res.json({
        error: null,
        data: {
          token: response.public_id,
          previewUrl: response.secure_url,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: errorMessages.serverError, data: null });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
