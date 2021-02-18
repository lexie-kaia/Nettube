import { Router } from 'express';

import { routes } from '../routes';
import { getHome, getSearch } from '../controllers/videoController';
import { getLogin, getSignup, getLogout } from '../controllers/userController';

export const homeRouter = Router();

homeRouter.get(routes.home, getHome);
homeRouter.get(routes.search, getSearch);
homeRouter.get(routes.signup, getSignup);
homeRouter.get(routes.login, getLogin);
homeRouter.get(routes.logout, getLogout);
