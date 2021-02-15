import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { join as pathJoin } from 'path';

import { routes } from './routes';
import { homeRouter } from './routers/homeRouter';
import { accountsRouter } from './routers/accountsRouter';
import { videosRouter } from './routers/videosRouter';

dotenv.config();

const app = express();

// view engine setup
app.set('views', pathJoin(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use(routes.home, homeRouter);
app.use(routes.accounts, accountsRouter);
app.use(routes.videos, videosRouter);

// error handler
app.use((req, res, next) => {
  res.render('pages/error');
});

export default app;
