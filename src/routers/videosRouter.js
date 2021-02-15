import { Router } from 'express';

import { routes } from '../routes';
import {
  getDeleteVideo,
  getEditVideo,
  getUpload,
  getVideoDetail,
} from '../controllers/videoController';

export const videosRouter = Router();

videosRouter.get(routes.uploadVideo, getUpload);
videosRouter.get(routes.videoDetail, getVideoDetail);
videosRouter.get(routes.editVideo, getEditVideo);
videosRouter.get(routes.deleteVideo, getDeleteVideo);
