'use strict';
module.exports = function (app) {
    var studentController = require('../controllers/studentController');
    var authController = require('../controllers/authController');
    // todoList Routes
    app.route('/students')
        .get(studentController.getAll)
        .post(studentController.createStudent);

    app.route('/students/:id')
        .get(studentController.getStudentById)
        .put(studentController.updateStudent)
        .delete(studentController.removeStudent);

    app.route('/auth')
        .get(authController.authenticate)
    // .put(todoList.update_a_task)
};