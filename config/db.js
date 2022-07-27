const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: '#Logoipsum2275'
})

database.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Connection To Database Successful');
});

module.exports = database;