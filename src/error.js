export class ApiError {
  constructor(code, message, redirectRoute) {
    this.code = code;
    this.message = message;
    this.redirectRoute = redirectRoute;
  }

  static badRequest(redirect) {
    return new ApiError(400, 'Bad Request', redirect);
  }

  static nonFound(redirect) {
    return new ApiError(404, 'Not Found', redirect);
  }
}

export const apiErrorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ApiError) {
    if (err.redirectRoute) return res.redirect(err.redirectRoute);
    return res.status(err.code).render('pages/error', { err });
  }
  return res.status(500).render('pages/error', { err });
};
