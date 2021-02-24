import { Router } from 'express';

import { routes } from '../routes';
import { getHome, getSearch } from '../controllers/videoController';
import {
  getLogin,
  getSignup,
  getLogout,
  postSignup,
  postLogin,
  githubAuth,
  githuAuthCallback,
  redirectHome,
  facebookAuth,
  facebookAuthCallback,
} from '../controllers/userController';
import { onlyPrivate, onlyPublic } from '../middlewares';

export const homeRouter = Router();

homeRouter.get(routes.home, getHome);
homeRouter.get(routes.search, getSearch);

homeRouter.get(routes.signup, onlyPublic, getSignup);
homeRouter.post(routes.signup, onlyPublic, postSignup, postLogin);

homeRouter.get(routes.login, onlyPublic, getLogin);
homeRouter.post(routes.login, onlyPublic, postLogin);

homeRouter.get(routes.logout, onlyPrivate, getLogout);

homeRouter.get(routes.github, onlyPublic, githubAuth);
homeRouter.get(routes.githubCallback, githuAuthCallback, redirectHome);

homeRouter.get(routes.facebook, onlyPublic, facebookAuth);
homeRouter.get(routes.facebookCallback, facebookAuthCallback, redirectHome);
