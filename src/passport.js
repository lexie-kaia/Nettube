import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import GitHubStrategy from 'passport-github2';

import { routes } from './routes';
import { githubVerifyCallback } from './controllers/userController';

import User from './models/User';

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:8080${routes.githubCallback}`,
      scope: ['user:email'],
    },
    githubVerifyCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
