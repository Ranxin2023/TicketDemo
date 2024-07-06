const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost', // Use the hostname from MySQL Workbench
  user: 'root', // Use your MySQL username
  password: 'R@ndyli94041424', // Use your MySQL password
  database: 'work_ticket', // Use your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
