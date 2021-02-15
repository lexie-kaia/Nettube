import { Router } from 'express';

import { routes } from '../routes';
import {
  getChangePassword,
  getEditProfile,
  getMy,
} from '../controllers/userController';

export const accountsRouter = Router();

accountsRouter.get(routes.me, getMy);
accountsRouter.get(routes.editProfile, getEditProfile);
accountsRouter.get(routes.changePassword, getChangePassword);
