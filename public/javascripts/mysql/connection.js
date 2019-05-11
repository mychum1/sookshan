var mysql = require('mysql');
exports.connection = mysql.createConnection({

host : 'localhost',
user : 'root',
password : '!@#$%',
port : '3306',
database : 'sookshan'

});
