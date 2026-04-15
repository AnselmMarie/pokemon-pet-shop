import { Request, Response } from 'express';
export declare const errFormatResponseUtil: (err: unknown) => {
    message: string | undefined;
    statusText: string | undefined;
    status: number | undefined;
};
export declare const errFormat500ResponseUtil: () => {
    message: string;
    statusText: string;
    status: number;
};
export declare const errorMiddleware: (err: unknown, req: Request, res: Response) => void;
//# sourceMappingURL=error.d.ts.map