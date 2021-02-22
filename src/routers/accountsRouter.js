import { Router } from 'express';

import { routes } from '../routes';
import {
  getChangePassword,
  getEditProfile,
  getMy,
} from '../controllers/userController';

export const accountRouter = Router();

accountRouter.get(routes.me, getMy);
accountRouter.get(routes.editProfile, getEditProfile);
accountRouter.get(routes.changePassword, getChangePassword);
