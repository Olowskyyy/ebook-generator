
import { NextApiRequest, NextApiResponse } from 'next';
import { generateEbook } from '../../backend/generateEbook';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content } = req.body;
  const result = await generateEbook(content);
  res.status(200).json({ result });
}
