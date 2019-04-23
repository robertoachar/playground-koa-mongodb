module.exports.checkObjectId = (value, message) => {
  const regex = new RegExp('^[0-9a-fA-F]{24}$');
  const match = value.match(regex);

  if (!match) {
    throw new Error(message);
  }

  return true;
};

module.exports.checkString = (value, message) => {
  if (typeof value !== 'string') {
    throw new Error(message);
  }

  if (value.trim() === '') {
    throw new Error(message);
  }

  return true;
};
