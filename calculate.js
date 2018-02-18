
var temp = '';
var result = [];

document.addEventListener('DOMContentLoaded', start)

function start() {
  var numButtons = document.getElementsByClassName("numberButton");
  for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', dispNum)
  }

  var clrButtons = document.getElementsByClassName("clr");
  for(var i = 0; i < clrButtons.length; i++) {
    clrButtons[i].addEventListener('click', doClear)
  }

  var operationButton = document.getElementsByClassName("opButton");
  for (var i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener('click', doOperation)
  }

  var eqlButton = document.getElementsByClassName("eql");
  eqlButton[0].addEventListener('click', doEquals)

  var sqrtButton = document.getElementsByClassName("sqButton");
  sqrtButton[0].addEventListener('click', doSqrt)
  
}

  


function dispNum(e) {
  var entry = e.target.value;
  temp += entry;
  document.getElementById("display").value = temp;
}

function doClear(e) {
  var clrCall = e.target.value;
  if (clrCall = "AC") {
    result = [];
    temp = '';
    document.getElementById("display").value = "0";
    console.log(result);
    console.log("AC! you hit the AC Button");
  }else {
    temp = '';
    document.getElementById("display").value = "0";
    console.log(result);
    console.log(temp);
    console.log("You hit C");
  }
}

function doOperation(e) {
  var operator = e.target.value;
  result.push(temp);
  result.push(operator);
  temp = "";
  //console.log(result);
  //console.log(temp);
  //console.log(operator);
  document.getElementById("display").value = operator;
}

function doEquals(e) {
  var eqlCall = e.target.value;
  result.push(temp);
  //console.log(result);
  var eqn = "";
  for (i = 0; i < result.length; i++) {
    eqn += result[i];
  }

  var ans = eval(eqn);
  document.getElementById("display").value = ans;
  result = [];
  //temp = "";
  temp = ans;
}

function doSqrt(e) {
  var val = parseInt(temp);
  var ansSqrt = Math.sqrt(val);
  document.getElementById("display").value = ansSqrt;
  result = [];
  temp = ansSqrt;
}

