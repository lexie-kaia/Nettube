import { routes } from './routes';
import multer from 'multer';
import path from 'path';

// local middleware
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Nettube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

// multer
const multerVideo = multer({ dest: 'uploads/videos/' });
const multerAvatar = multer({ dest: 'uploads/avatars/' });

export const uploadVideo = multerVideo.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');

// access control
export const onlyPublic = (req, res, next) => {
  if (req.user) return res.redirect(routes.home);
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (!req.user) return res.redirect(routes.home);
  next();
};
