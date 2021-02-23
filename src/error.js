export class ApiError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest() {
    return new ApiError(400, 'Bad Request');
  }

  static nonFound() {
    return new ApiError(404, 'Not Found');
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
