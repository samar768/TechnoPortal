import express from 'express';

import { validateLogin } from '../controllers/login.js';

const router = express.Router();

router.post('/', validateLogin);

export default router;
