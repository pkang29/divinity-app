const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.get('/', function(req, res) {

    res.send('<h1>Hello Welcome!!</h1>');

});

const webServer = app.listen(5000, function() {
    console.log("Node server (webServer) is running...");
})

app.get('/query/', function(req,res){
    res.send('Hello query');
})

//this is a one-time route called from parsedata to populate the database
app.post('/post/', function(req, res){
    // var sql=`INSERT INTO recipes (result, ing1, ing2, ing3, ing4, ing5) VALUES ?`;
    // var values = [
    //         [req.body.result, 
    //         req.body.ing1, 
    //         req.body.ing2, 
    //         req.body.ing3, 
    //         req.body.ing4, 
    //         req.body.ing5]
    //     ];
    
    // connection.query(sql, [values], function(error, result){
    //     if(error) throw error;
    //     console.log(result);
    // })
    // res.send('ok');
})

app.get('/search', function(req, res){
    var searchText = req.query.searchText;
    var sql=`SELECT * FROM recipes WHERE result = ? OR ing1 = ? OR ing2 = ? OR ing3 = ? OR ing4 = ? OR ing5 = ?`
    var inserts=[searchText, searchText, searchText, searchText, searchText, searchText];
    
    sql = mysql.format(sql, inserts);
    connection.query(sql, function(error,result){
        if(error) throw error;
        
        res.send(result);

    })
    
})
