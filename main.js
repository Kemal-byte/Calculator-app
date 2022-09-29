let lastNumber = "";
let currentNumber = "";
let total = 0;

const operators = document.querySelectorAll(".operators");
const addition = document.getElementById("addition");
const substraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const dividing = document.getElementById("dividing");
const clearBtn = document.getElementById("AC");
const pointBtn = document.getElementById(".");
const equal = document.getElementById("equal");
const numbers = document.querySelectorAll(".number");
const deleteBtn = document.getElementById("delete");

let lastOperation = document.getElementById("lastOperation");
let currentOperation = document.getElementById("currentOperation");

// numbers.addEventListener("click", numConc);
deleteBtn.addEventListener("click", deleteNumber);
clearBtn.addEventListener("click", clearDisplay);
pointBtn.addEventListener("click", addPoint);
equal.addEventListener("click", evaluate);
addition.addEventListener("click", add);
substraction.addEventListener("click", substract);
dividing.addEventListener("click", divide);
multiplication.addEventListener("click", multiply);

const getNum = function (e) {
  console.log(`${e.target.id}`);
  currentOperation.innerHTML += e.target.id;
};
const getOperator = (e) => {
  console.log(`${e.target.id}`);
};

for (let x of operators) {
  // it adds onclick function to operators
  x.addEventListener("click", getOperator);
}
for (let x of numbers) {
  // it adds a function to the numbers
  x.addEventListener("click", getNum);
}

function deleteNumber() {
  currentOperation.innerHTML = null;
  console.log("clicked on delete number");
}
function clearDisplay() {
  currentOperation.innerHTML = "";
  lastOperation.innerHTML = "";
  console.log("clicked on clearDisplay");
}
function addPoint() {
  console.log("cliked on point button");
}
function evaluate() {
  console.log("cliked on equal button");
}

function add() {
  // console.log("add btn cliked");
  currentNumber += currentOperation;
}
function divide() {}
function substract() {}
function multiply() {}
