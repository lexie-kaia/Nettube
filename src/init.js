import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 8080;

const handleListening = () =>
  console.log(`Server Listening at: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
