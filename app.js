
var http = require("http");
var allTheFunc = require("./modules/module1.js");
var min = 100;
var max = 1000000;

http.createServer(function(req, res)
{
  var finalResult = allTheFunc.balance() + allTheFunc.totalFunc(min, max) + "\n";
  res.writeHead(200);
  res.write(finalResult);
  res.end();
}).listen(3000);

console.log("listening");
