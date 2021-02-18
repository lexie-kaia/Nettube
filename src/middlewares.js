import { routes } from './routes';

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = 'Nettube';
  res.locals.routes = routes;
  next();
};
