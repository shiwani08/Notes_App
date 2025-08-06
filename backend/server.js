import express from 'express';
import { PORT } from './config.js';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(path.resolve(), '../frontend/login.html'));
});

app.listen(PORT);
console.log(`Express server running at http://localhost:${PORT}/`);