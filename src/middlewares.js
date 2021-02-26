import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

import { routes } from './routes';

// local middleware
export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Nettube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

// multer
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_REGION,
});

const multerVideo = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'nettube/videos',
  }),
});

const multerAvatar = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'nettube/avatars',
  }),
});

export const uploadVideo = multerVideo.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');

// access control
export const onlyPublic = (req, res, next) => {
  if (req.user) return res.redirect(routes.home);
  next();
};

export const onlyPrivate = (req, res, next) => {
  if (!req.user) return res.redirect(routes.login);
  next();
};
