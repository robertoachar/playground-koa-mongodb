const KoaRouter = require('koa-router');

const {
  check,
  create,
  list,
  remove,
  update,
  view
} = require('./user.controller');

const router = KoaRouter({
  prefix: '/api/users'
});

router.get('/', list);
router.post('/', create);
router.get('/:id', check, view);
router.put('/:id', check, update);
router.delete('/:id', check, remove);

module.exports = router;
