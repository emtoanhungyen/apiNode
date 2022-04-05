import { Router } from 'express'
import { get, list, post, remove, update } from '../controllers/category';

const router = Router();

router.post('/categorys', post);
router.get('/categorys', list);
router.get('/categorys/:id', get);
router.put('/categorys/:id', update);
router.delete('/categorys/:id', remove);

export default router