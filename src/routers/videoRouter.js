import { Router } from 'express';

import { routes } from '../routes';
import {
  getDeleteVideo,
  getEditVideo,
  getUpload,
  getVideoDetail,
  postEditVideo,
  postUpload,
} from '../controllers/videoController';
import { uploadVideo } from '../middlewares';

export const videoRouter = Router();

videoRouter.get(routes.uploadVideo, getUpload);
videoRouter.post(routes.uploadVideo, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), getVideoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), getDeleteVideo);
