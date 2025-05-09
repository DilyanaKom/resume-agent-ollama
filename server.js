import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import fs from 'fs';
import pdf2json from 'pdf2json';

const app = express();
const upload = multer({ dest: 'uploads/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/analyze', upload.single('resume'), (req, res) => {
    const pdfParser = new pdf2json();
  
    // Read the uploaded PDF file into a buffer
    const resumeBuffer = fs.readFileSync(req.file.path);
  
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      // Extract the text from the parsed PDF data
      const resumeText = pdfData.formImage.Texts.map(textObj => decodeURIComponent(textObj.R[0].T)).join(' ');
  
      // Now you can manipulate the text as needed, e.g., pass it to another function
      console.log('Extracted text:', resumeText);
  
      // You can perform backend manipulation here, for example:
      // - Analyzing the text
      // - Saving it to a database
      // - Passing it to another service for processing
    });
  
    pdfParser.on('pdfParser_dataError', (err) => {
      console.error('PDF Parsing Error:', err);
      res.status(500).send('Error parsing PDF');
    });
  
    // Parse the PDF buffer
    pdfParser.parseBuffer(resumeBuffer);
  
    // Optionally, send a success message or perform other actions here
    res.send('PDF received and text processed');
  });


app.listen(3001, () => console.log(`Server is listening on port http://localhost:3001`));
