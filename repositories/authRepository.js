
var sql = require('../db/dbConfig.js');

var authRepository = function(){
    this.isAuthenticated =  function (userid, pwd, result) {
        sql.query("SELECT * FROM AUTH WHERE USERID=? AND PWD=?",[userid,pwd], function (err, res) {

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

module.exports = authRepository();