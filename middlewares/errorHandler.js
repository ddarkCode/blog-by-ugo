import debug from 'debug';

import CustomError from './CustomError';

const log = debug('index:errorHandler');

export default function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  const error = new CustomError(
    err.message || 'Internal server error',
    err.status || 500
  );

  return res.status(error.status).json(error);
}
