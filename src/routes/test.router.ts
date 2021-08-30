import { Router } from 'express';
import TestController from '../controllers/test.controller';
const router = Router();

router.get('/', TestController.index);

export { router };