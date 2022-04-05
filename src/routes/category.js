import { Router } from 'express'
import { get, post } from '../controllers/category';

const router = Router();

router.post('/category', post);
router.get('/category/:id', get);

export default router