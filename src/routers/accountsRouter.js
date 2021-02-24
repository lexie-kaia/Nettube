import { Router } from 'express';

import { routes } from '../routes';
import {
  getChangePassword,
  getEditProfile,
  getMy,
  postChangePassword,
  postEditProfie,
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

export const accountRouter = Router();

accountRouter.get(routes.me(), onlyPrivate, getMy);

accountRouter.get(routes.editProfile(), onlyPrivate, getEditProfile);
accountRouter.post(
  routes.editProfile(),
  onlyPrivate,
  uploadAvatar,
  postEditProfie
);

accountRouter.get(routes.changePassword(), onlyPrivate, getChangePassword);
accountRouter.post(routes.changePassword(), onlyPrivate, postChangePassword);
