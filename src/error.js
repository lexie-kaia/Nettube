export class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ApiError(400, msg);
  }

  static nonFound(msg) {
    return new ApiError(404, msg);
  }
}

export const apiErrorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.code).render('pages/error', { err });
  }

  return res
    .status(500)
    .render('error', { errorMessage: 'Server Internal Error' });
};
