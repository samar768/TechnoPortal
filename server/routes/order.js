import express from 'express';

import { processOrder } from '../controllers/order.js';

const router = express.Router();

router.post('/', processOrder);

export default router;