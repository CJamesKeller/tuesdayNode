
var toDollars = require("./moduleAlpha.js");
var randomNumber = require("./moduleBeta.js");
var tfReturn = 0;

function totalFunc(min, max)
{
  tfReturn = toDollars(randomNumber(min, max));
  return tfReturn;
}

function balance()
{
  return "Account balance: \n";
}

module.exports =
{
  totalFunc,
  balance
};
