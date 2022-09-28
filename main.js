let lastNumber = "";
let currentNumber = "";

const addition = document.getElementById("addition");
const substraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const dividing = document.getElementById("dividing");
const clearBtn = document.getElementById("AC");
const pointBtn = document.getElementById(".");
const equal = document.getElementById("equal");
const numbers = document.querySelectorAll(".number");
const deleteBtn = document.getElementById("delete");

const lastOperation = document.getElementById("lastOperation");
const currentOperation = document.getElementById("currentOperation");

deleteBtn.addEventListener("click", deleteNumber);
clearBtn.addEventListener("click", clearDisplay);
pointBtn.addEventListener("click", addPoint);
equal.addEventListener("click", evaluate);
addition.addEventListener("click", add);
substraction.addEventListener("click", substract);
dividing.addEventListener("click", divide);
multiplication.addEventListener("click", multiply);

function deleteNumber() {
  console.log("clicked on delete number");
}
function clearDisplay() {
  console.log("clicked on clearDisplay");
}
function addPoint() {
  console.log("cliked on point button");
}
function evaluate() {
  console.log("cliked on equal button");
}

function add() {}
function divide() {}
function substract() {}
function multiply() {}
