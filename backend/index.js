import express from 'express';
import cors from 'cors';
import generateName from './api/generate-name.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-name', generateName);

app.get('/', (req, res) => {
  res.send('Celestial Name Generator API is running.');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
