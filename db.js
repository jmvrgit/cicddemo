var mysql = require('mysql2'); 

var connection = mysql.createConnection({
    host: '192.168.254.104',
    port: 9002,
    user: 'root',
    password: 'testDBpassword',
    database: 'seccam_db',
});


connection.connect(function (error) {
if (!!error) {
console.log(error);
} else {
console.log('MySQL Database Connected..!');
}
});

module.exports = connection;