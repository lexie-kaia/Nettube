import { Router } from 'express';

import { routes } from '../routes';
import {
  getChangePassword,
  getChannel,
  getEditProfile,
  getMyAccount,
  postChangePassword,
  postEditProfie,
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

export const userRouter = Router();

userRouter.get(routes.editProfile(), onlyPrivate, getEditProfile);
userRouter.post(
  routes.editProfile(),
  onlyPrivate,
  uploadAvatar,
  postEditProfie
);

userRouter.get(routes.changePassword(), onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword(), onlyPrivate, postChangePassword);

userRouter.get(routes.me(), onlyPrivate, getMyAccount);
userRouter.get(routes.channel(), getChannel);
