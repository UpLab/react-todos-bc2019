import _Error from './_Error';

class AppError extends _Error {
  constructor(message, code) {
    super(message);
  }
}

export default AppError;