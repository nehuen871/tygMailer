const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'tyg',
  password: 'tyg',
  database: 'tyg',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;


//CREATE USER 'tyg'@'localhost' IDENTIFIED BY 'tyg';
//GRANT ALL PRIVILEGES ON tyg.* TO 'tyg'@'localhost';
//FLUSH PRIVILEGES;