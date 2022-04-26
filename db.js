var mysql = require('mysql2'); 

var connection = mysql.createConnection({
    host: 'DEFINED_HOST',
    port: 9002,
    user: 'root',
    password: 'DEFINED_PASSWORD',
    database: 'DEFINED_DBNAME',
});


connection.connect(function (error) {
if (!!error) {
console.log(error);
} else {
console.log('MySQL Database Connected..!');
}
});

module.exports = connection;