require('dotenv').config()
const mysql = require('mysql2');
const dbBook = mysql.createPool({
    host : 'localhost',
    user: 'root',
    password : '!Admin1234',
    database: "express_books",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
  });

  module.exports = dbBook.promise()

//   host : process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password : process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,