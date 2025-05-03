const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const puppeteer = require('puppeteer');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/generate', async (req, res) => {
  const { title, content, colorTheme } = req.body;

  const html = `
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: ${colorTheme}; color: #333; }
        h1 { color: #222; }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <div>${content}</div>
    </body>
    </html>
  `;

  const filePath = '/tmp/ebook.pdf';
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(html);
  await page.pdf({ path: filePath, format: 'A4' });
  await browser.close();

  res.download(filePath, 'ebook.pdf');
});

app.listen(port, () => {
  console.log(`E-book generator backend running on http://localhost:${port}`);
});