import express from 'express';

const app = express();
app.use('/static', express.static('public'));


app.listen(3001, () => console.log(`Server is listening on port hhtp://localhost:3001`));
