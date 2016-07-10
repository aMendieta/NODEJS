var http = require("http");
fs=require("fs");
//var html = fs.readFileSync("./index.html");

  http.createServer(function(req,res){
    fs.readFile("./index.html",function(error,html){
    res.write(html);
    res.end();
    });
  }).listen(8099);
