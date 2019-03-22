module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "you must login!" });
  }

  //if there is a user, let user continue on to request handler
  next();
};
