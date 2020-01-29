const express = require('express');
const app = express();

app.get('/', function(req, res) {

    res.send('<h1>Hello Welcome</h1>');

});

const webServer = app.listen(5000, function() {
    console.log("Node server (webServer) is running...");
})
