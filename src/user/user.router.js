import KoaRouter from 'koa-router';

import { check, create, list, remove, update, view } from './user.controller';

const router = KoaRouter({
  prefix: '/api/users'
});

router.get('/', list);
router.post('/', create);
router.get('/:id', check, view);
router.put('/:id', check, update);
router.delete('/:id', check, remove);

export default router;
