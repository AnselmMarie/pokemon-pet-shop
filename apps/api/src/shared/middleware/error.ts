import { Request, Response } from 'express';

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

export const errorMiddleware = (err: unknown, req: Request, res: Response) => {
  const status = (err as { status: number })?.status || 500;
  res.status(status).json(errFormatResponseUtil(err));
};
