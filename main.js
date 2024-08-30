let num1 = "";
let num2 = "";
let operator = "";
let result = null;
let isOperatorSelected = false;

const numbers = document.querySelectorAll(".num");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const clear = document.getElementById("clear");
const clearOne = document.getElementById("clear-one");
const equal = document.getElementById("equal");
const display = document.getElementById("display");

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (!isOperatorSelected) {
      num1 = num1 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    } else {
      num2 = num2 + event.target.innerText;
      display.innerText = `${num1} ${operator} ${num2}`;
    }
  });
});

addition.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});

subtraction.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});

multiplication.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});

division.addEventListener("click", function (event) {
  isOperatorSelected = true;
  operator = event.target.innerText;
  display.innerText = `${num1} ${operator} ${num2}`;
});

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  isOperatorSelected = false;
  display.innerText = "";
}

clear.addEventListener("click", clearDisplay);

equal.addEventListener("click", function () {
  if (operator === "+") {
    display.innerText = parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    display.innerText = parseInt(num1) - parseInt(num2);
  } else if (operator === "*") {
    display.innerText = parseInt(num1) * parseInt(num2);
  } else if (operator === "/") {
    display.innerText = parseInt(num1) / parseInt(num2);
  }
});

clearOne.addEventListener("click", function () {
  if (num2.length > 0) {
    let newNum = num2.split("");
    newNum.pop(); 
    num2 = newNum.join(""); 
  } else if (operator.length > 0) {
    operator = ""; 
  } else if (num1.length > 0) {
    let newNum = num1.split("");
    newNum.pop(); 
    num1 = newNum.join(""); 
  }
  display.innerText = `${num1} ${operator} ${num2}`;
});

