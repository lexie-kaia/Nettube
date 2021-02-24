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
import { onlyPrivate, uploadVideo } from '../middlewares';

export const videoRouter = Router();

videoRouter.get(routes.uploadVideo(), onlyPrivate, getUpload);
videoRouter.post(routes.uploadVideo(), onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), getVideoDetail);

videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), onlyPrivate, getDeleteVideo);
