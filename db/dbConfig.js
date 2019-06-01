'use strict';

var mysql = require('mysql');

const
    MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME || 'localhost',
    MYSQL_USERNAME = process.env.MYSQL_HOSTNAME || 'root',
    MYSQL_PASSWORD = process.env.MYSQL_HOSTNAME || '',
    MYSQL_DB = process.env.MYSQL_HOSTNAME || 'nagp_db' ;

//local mysql db connection
var connection = mysql.createConnection({
    host: `${MYSQL_HOSTNAME}`,//'localhost',
    user: `${MYSQL_USERNAME}`,//'root',
    password: `${MYSQL_PASSWORD}`,//'',
    database: `${MYSQL_DB}`,//'nagp_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;