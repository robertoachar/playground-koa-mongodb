const User = require('./user.model');

const { checkObjectId, checkString } = require('../util');

const check = async (ctx, next) => {
  const { id } = ctx.params;

  checkObjectId(id, 'Invalid id');

  const user = await User.findById(id);

  if (!user) {
    throw new Error('User not found');
  }

  await next();
};

const create = async (ctx) => {
  const { name, email } = ctx.request.body;

  checkString(name, 'Enter a name');
  checkString(email, 'Enter an email');

  const user = new User({ name, email });

  await user.save();

  ctx.body = user;
};

const list = async (ctx) => {
  const users = await User.find();

  ctx.body = users;
};

const remove = async (ctx) => {
  const { id } = ctx.params;

  const user = await User.findByIdAndDelete(id);

  ctx.body = user;
};

const update = async (ctx) => {
  const { id } = ctx.params;
  const { name, email } = ctx.request.body;

  checkString(name, 'Enter a name');
  checkString(email, 'Enter an email');

  const user = await User.findOneAndUpdate(
    { _id: id },
    { name, email },
    {
      new: true,
      runValidators: true
    }
  );

  ctx.body = user;
};

const view = async (ctx) => {
  const { id } = ctx.params;

  const user = await User.findById(id);

  ctx.body = user;
};

module.exports = {
  check,
  create,
  list,
  remove,
  update,
  view
};
