import { NextApiRequest, NextApiResponse } from "next";
import { generateEbook } from "../../backend/generateEbook";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { title, content } = req.body;
  const pdfBuffer = await generateEbook(title, content);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=ebook.pdf");
  res.send(pdfBuffer);
}