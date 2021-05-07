const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Redes"
})

module.exports = Connection;