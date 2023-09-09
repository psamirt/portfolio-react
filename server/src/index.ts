import express from 'express';
const app = express();
import message from './routes/message';
app.use(express.json());
require('dotenv').config();

const PORT = 3000;

app.get('/send', (_req, res) => {
  console.log('message sended');
  res.send('vamos');
});

app.use('/api', message);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
