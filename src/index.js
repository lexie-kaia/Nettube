import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const PORT = 3000;

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.get('/', (req, res) => {
  res.send('home');
});

// error handler

app.use((req, res, next) => {
  res.status(400).send('404 Not Found');
});

app.listen(PORT, () =>
  console.log(`Server Listening at: http://localhost:${PORT}`)
);
