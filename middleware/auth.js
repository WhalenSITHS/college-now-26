function trainerCheck(req, res, next) {
  if (req.query.trainer === "ash") {
    next();
  } else {
    res.status(403).json({
      error: "you're not supposed to be here",
    });
  }
}
module.exports = trainerCheck;
