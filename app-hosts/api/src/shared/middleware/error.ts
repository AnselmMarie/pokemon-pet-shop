import { Request, Response } from 'express';

interface AppError {
  message?: string;
  statusText?: string;
  status?: number;
}

export const errFormatResponseUtil = (err: unknown) => {
  const appErr = err as AppError;
  return {
    message: appErr?.message,
    statusText: appErr?.statusText,
    status: appErr?.status,
  };
};

export const errFormat500ResponseUtil = () => {
  return {
    message: 'The server was unable to complete your request.',
    statusText: '',
    status: 500,
  };
};

export const errorMiddleware = (err: unknown, req: Request, res: Response) => {
  const appErr = err as AppError;
  const status = appErr?.status || 500;
  res.status(status).json(errFormatResponseUtil(appErr));
};
