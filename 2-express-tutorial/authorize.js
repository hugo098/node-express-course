const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "hugo") {
    req.user = { name: "hugo", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
