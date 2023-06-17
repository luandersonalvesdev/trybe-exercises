const existingId = (req, res, next) => {
  const { id } = req.params;
  if (Number(id)) return next();
  return res.status(404).json({ message: 'id não é numero, existingId erro' });
};

module.exports = existingId;