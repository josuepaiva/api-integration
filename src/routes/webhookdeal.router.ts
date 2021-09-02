import { Router } from 'express';
import { dealUpdateNotificationsController } from '../useCases/webhookDealUpdate';

const router = Router();

router.post('/added', (req, res) => {
  return dealUpdateNotificationsController.handle(req,res);
});

export default router;
