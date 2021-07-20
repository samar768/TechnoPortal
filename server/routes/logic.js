import express from 'express';

import { processLogic } from '../controllers/logic.js';

const router = express.Router();

router.post('/', processLogic);

export default router;
