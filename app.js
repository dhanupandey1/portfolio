var express = require("express");
var app   = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.use(bodyParser.json());
app.set('view engine', 'html');

app.get('/',(req,res)=>{
  res.render(__dirname + 'index.html');
});



app.listen(3000,(req,res)=>{
console.log("conneted to the port");

})
