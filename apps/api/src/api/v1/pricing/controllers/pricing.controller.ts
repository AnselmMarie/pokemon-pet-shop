import { Request, Response } from 'express';

import {
  errFormat500ResponseUtil,
  errFormatResponseUtil,
} from '../../../../utils/err.format.response.util';
import { getPricingService } from '../services/pricing.service';

const getPricingController = async (req: Request<null, null, null, null>, res: Response) => {
  try {
    const finalRes = await getPricingService().catch(() => {
      throw errFormat500ResponseUtil();
    });
    res.status(200).json(finalRes);
  } catch (err) {
    res.status(err?.status).json(errFormatResponseUtil(err));
  }
};

export { getPricingController };
