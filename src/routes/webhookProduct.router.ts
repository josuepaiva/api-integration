import { Router } from 'express';
import { createProductController } from '../useCases/useCaseCreateProduct';

const router = Router();

router.post('/added', (req, res) => {
  return createProductController.handle(req,res);
});

export default router;
