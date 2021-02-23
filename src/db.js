import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log('MongoDB connected');
const handleError = () => console.log('MongoDB connection error');

db.on('error', handleError);
db.once('open', handleOpen);
