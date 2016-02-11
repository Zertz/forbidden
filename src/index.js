module.exports = function (method) {
  let forbidden = function (req, res, next) {
    if (req.method.toLowerCase() === method.toLowerCase()) {
      res.sendStatus(403)
    } else {
      next()
    }
  }

  return forbidden
}
