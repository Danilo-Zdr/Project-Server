var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())

var cors = require('cors')
var corsOptions = {
 origin: 'http://localhost:4200',
 optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

var db = require('./app/config/database');

require('./app/routes/routes')(app);

var server = app.listen(8080, function() {

 let host = server.address().address
 let port = server.address().port

 console.log("App listening at http://%s:%s", host, port);
});
