var studentRepository = require('../repositories/studentRepository');

var studentController = function () {

  this.getAll = function (req, res) {
    studentRepository.getAllUsers(function (err, users) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(users);
    });
  };

  this.createStudent = function (req, res) {
    var student = req.body;
    studentRepository.createUser(student, function (err, userid) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(userid);
    });
  };

  this.getStudentById = function (req, res) {
    var id = req.params.id;
    studentRepository.getUserById(id, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(user);
    });
  };

  this.removeStudent = function (req, res) {
    var id = req.params.id;
    studentRepository.removeUser(id, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(user);
    });
  };

  this.updateStudent = function (req, res) {
    var id = req.params.id;
    var student = req.body;
    studentRepository.updateUserById(student, id, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.status(200).send(user);
    });
  };

  return this;
}

module.exports = studentController();