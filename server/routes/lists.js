import express from 'express';

import { getLists, getList, getFilteredList } from '../controllers/lists.js';

const router = express.Router();

router.get('/', getLists);
router.get('/list/:listType', getList);
router.get('/list/:listType/:filter', getFilteredList);

export default router;

// router.post('/', createPost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);