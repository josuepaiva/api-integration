import { Router } from 'express';
import { userCaseDealsConsolidated } from '../useCases/useCaseTotalOrders';

const router = Router();

router.get('/', (req, res) => {
  return userCaseDealsConsolidated.handle(req,res);
});

export default router;
