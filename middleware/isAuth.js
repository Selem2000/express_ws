const isAuth = (req, res, next) => {
  const d = new Date();
  let hour = d.getHours();
  let day = d.getDay();

  if (hour >= 9 && hour <= 17 && day >= 1 && day <= 5) {
    return next();
  }
  return res.status(400).send("<h1>closed !!!</h1>");
};

module.exports = isAuth;
