import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

import { routes } from './routes';
import { homeRouter } from './routers/homeRouter';
import { accountsRouter } from './routers/accountsRouter';
import { videosRouter } from './routers/videosRouter';
import { localMiddleware } from './middlewares';

dotenv.config();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.use(localMiddleware);

// router
app.use(routes.home, homeRouter);
app.use(routes.accounts, accountsRouter);
app.use(routes.videos, videosRouter);

// error handler
app.use((req, res, next) => {
  res.render('pages/error', { pageTitle: 'Error' });
});

export default app;
