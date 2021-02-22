import dotenv from 'dotenv';
dotenv.config();
import './db';

import app from './app';

const PORT = process.env.PORT || 8080;

const handleListening = () =>
  console.log(`Server Listening at: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
