import dotenv from 'dotenv';
dotenv.config();

import './db';
import './models/Video';
import './models/User';
import './models/Comment';

import app from './app';

const PORT = process.env.PORT || 8080;

const handleListening = () =>
  console.log(`Server Listening at: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
