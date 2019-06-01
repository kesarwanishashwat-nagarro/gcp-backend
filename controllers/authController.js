
var authRepository = require('../repositories/authRepository');

var authController = function () {

  this.authenticate = function (req, res) {
    var userid = req.query.userid;
    var pwd = req.query.pwd;
    authRepository.isAuthenticated(userid, pwd, function (err, users) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(users);
    });
  }

  return this;
}

module.exports = authController();