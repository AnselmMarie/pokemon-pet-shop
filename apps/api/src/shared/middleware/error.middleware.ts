import { Request, Response, NextFunction } from 'express';

export const errFormatResponseUtil = (err: any) => {
  return {
    message: err?.message,
    statusText: err?.statusText,
    status: err?.status,
  };
};

export const errFormat500ResponseUtil = () => {
  return {
    message: 'The server was unable to complete your request.',
    statusText: '',
    status: 500,
  };
};

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err?.status || 500;
  res.status(status).json(errFormatResponseUtil(err));
};

