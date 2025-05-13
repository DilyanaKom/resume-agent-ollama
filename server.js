import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import { readFile, unlink } from 'fs/promises';
import PdfParse from 'pdf-parse';

const app = express();
const upload = multer({ dest: 'uploads/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    const resumeBuffer = await readFile(req.file.path);
    const data = await PdfParse(resumeBuffer);
    const resumeText = data.text;
    const jobDescription = req.body.job;

    console.log('Extracted text:', resumeText);
    console.log(req.body.job);

    res.send(resumeText);
  } catch (err) {
    console.error('PDF Parsing Error:', err);
    res.status(500).send('Error parsing PDF');
  } finally {
    try {
      await unlink(req.file.path);
    } catch (cleanupErr) {
      console.error('Error deleting uploaded file:', cleanupErr);
    }
  }
});


app.listen(3001, () => console.log(`Server is listening on port http://localhost:3001`));
