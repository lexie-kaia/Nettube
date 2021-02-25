import { Router } from 'express';

import { routes } from '../routes';
import {
  postAddComments,
  postRegisterViews,
} from '../controllers/videoController';

export const apiRouter = Router();

apiRouter.post(routes.registerViews, postRegisterViews);
apiRouter.post(routes.addComments, postAddComments);
