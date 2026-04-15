import { Request, Response } from 'express';

import { errFormat500ResponseUtil, errFormatResponseUtil } from '../../../shared/middleware/error';
import { getPricingService } from '../services/pricing.service';

export const getPricingController = async (req: Request<null, null, null, null>, res: Response) => {
  try {
    const finalRes = await getPricingService().catch(() => {
      throw errFormat500ResponseUtil();
    });
    res.status(200).json(finalRes);
  } catch (err: unknown) {
    res.status((err as { status: number })?.status || 500).json(errFormatResponseUtil(err));
  }
};
