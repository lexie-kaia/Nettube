import { Router } from 'express';

import { routes } from '../routes';
import {
  getDeleteVideo,
  getEditVideo,
  getNew,
  getVideoDetail,
} from '../controllers/videoController';

export const videosRouter = Router();

videosRouter.get(routes.new, getNew);
videosRouter.get(routes.videoDetail, getVideoDetail);
videosRouter.get(routes.editVideo, getEditVideo);
videosRouter.get(routes.deleteVideo, getDeleteVideo);
