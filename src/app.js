import '@babel/polyfill';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';

import { routes } from './routes';
import { homeRouter } from './routers/homeRouter';
import { userRouter } from './routers/userRouter';
import { videoRouter } from './routers/videoRouter';
import { apiRouter } from './routers/apiRouter';
import { localMiddleware } from './middlewares';
import { ApiError, apiErrorHandler } from './error';

import './passport';

const app = express();
dotenv.config();
const MongoStore = connectMongo(session);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localMiddleware);

// routers
app.use(routes.home, homeRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

// error handler
app.use((req, res, next) => {
  next(ApiError.nonFound());
});

app.use(apiErrorHandler);

export default app;
