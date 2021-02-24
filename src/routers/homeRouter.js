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
} from '../controllers/userController';

export const homeRouter = Router();

homeRouter.get(routes.home, getHome);
homeRouter.get(routes.search, getSearch);

homeRouter.get(routes.signup, getSignup);
homeRouter.post(routes.signup, postSignup, postLogin);

homeRouter.get(routes.login, getLogin);
homeRouter.post(routes.login, postLogin);

homeRouter.get(routes.logout, getLogout);

homeRouter.get(routes.github, githubAuth);
homeRouter.get(routes.githubCallback, githuAuthCallback, redirectHome);
