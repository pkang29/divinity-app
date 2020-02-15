const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let connection= mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password:process.env.DB_PASS,
});

connection.connect(function(err){

    if(err){
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as thread id:' + connection.threadId);

});

// one-time call to create the table in MySQL
// var sql = `CREATE TABLE recipes (
//     result VARCHAR(255),
//     ing1 VARCHAR(255),
//     ing2 VARCHAR(255),
//     ing3 VARCHAR(255),
//     ing4 VARCHAR(255),
//     ing5 VARCHAR(255))`;

// connection.query(sql, function(err, result) {

//     if(err) throw err;
//     console.log(result);
// });

// connection.end((err) => {
//     if(err){
//         console.error(err.stack);
//     }
// })


module.exports = connection;
