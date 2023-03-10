import nc from 'next-connect';
import multer from 'multer';
import DatauriParser from 'datauri/parser';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'node:path';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (res: NextApiResponse) => {
    res.status(500).end('Ocurrió un error');
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end('No econtrado');
  },
})
  .use(multer().single('file'))
  .post<any>(async (req, res) => {
    const image = req.file;
    const parser = new DatauriParser();

    try {
      const createImage = async (img: any) => {
        const base64Iamge = parser.format(path.extname(img.originalname).toString(), img.buffer);

        const formData = new FormData();
        formData.append('file', base64Iamge.content || '');
        formData.append('upload_preset', process.env.CLOUDINARY_PRESET || '');
        formData.append('timestamp', (Date.now() / 1000).toString());
        formData.append('api_key', process.env.CLOUDINARY_API_KEY || '');

        const upload = await fetch(process.env.CLOUDINARY_API_URL || '', {
          method: 'POST',
          body: formData,
        });
        return upload;
      };
      const imageModified = await createImage(image);
      const json = await imageModified.json();
      res.json({ error: null, data: json });
    } catch (error) {
      res.status(500).json({ error, data: null });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
