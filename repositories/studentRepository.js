var sql = require('../db/dbConfig.js');

var studentRepository = function () {

    this.createUser = function (newUser, result) {
        sql.query("INSERT INTO users set ?", newUser, (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res.insertId);
                this.getUserById(res.insertId, result);
            }
        });
    };

    this.removeUser = function (id, result) {
        sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(err, null);
            }
            else {
                console.log(res);
                result(null, res);
            }
        });
    };

    this.getAllUsers = function (result) {
        sql.query("Select * from users", (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('users : ', res);

                result(null, res);
            }
        });
    }

    this.getUserById = function (id, result) {
        sql.query("Select * from users where id= ?", id, (err, res) => {

            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                console.log('user : ', res);

                result(null, res);
            }
        });
    }

    this.updateUserById = function (user, id, result) {
        sql.query("update users set name=?,father_name=?,mother_name=?,category =? where id= ?",
            [user.name, user.father_name, user.mother_name, user.category, id],
            (err, res) => {

                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    console.log('user : ', res);

                    result(null, res);
                }
            });
    }

    return this;
}

module.exports = studentRepository();