import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import connectMongo from 'connect-mongo';
const MongoStore = connectMongo.default;
import passport from 'passport';
import path from 'path';

import { routes } from './routes';
import { homeRouter } from './routers/homeRouter';
import { accountRouter } from './routers/accountsRouter';
import { videoRouter } from './routers/videoRouter';
import { localMiddleware } from './middlewares';
import { ApiError, apiErrorHandler } from './error';

import './passport';

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
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

// routers
app.use(routes.home, homeRouter);
app.use(routes.accounts, accountRouter);
app.use(routes.videos, videoRouter);

// error handler
app.use((req, res, next) => {
  next(ApiError.nonFound());
});

app.use(apiErrorHandler);

export default app;
