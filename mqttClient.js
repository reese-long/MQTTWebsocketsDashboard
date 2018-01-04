var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/mqttHTML.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
/*

*/