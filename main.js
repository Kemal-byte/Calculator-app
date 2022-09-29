let currentNumber = "";
let total = 0;
let lastOperator = "";

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

let lastNumber = Number(currentOperation.innerHTML);

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
  console.log(`${equal.innerHTML}`);
  console.log(`${e.target.id}`);
  currentOperation.innerHTML += e.target.id;
};
const getOperator = (e) => {
  console.log(`${e.target.id}`);
  lastOperator = e.target.id;
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
}
function clearDisplay() {
  currentOperation.innerHTML = "";
  lastOperation.innerHTML = "";
  lastOperator = "";
}
function addPoint() {
  console.log("cliked on point button");
}
function evaluate() {
  let y = Number(currentOperation.innerHTML);
  if (lastOperator === "addition") {
    if (lastOperation.innerHTML && !currentOperation.innerHTML) {
      lastOperation.innerHTML = Number(lastOperation.innerHTML) + y;
    } else {
      add();
    }
  } else if (lastOperator === "subtraction") {
    if (lastOperation.innerHTML && !currentOperation.innerHTML) {
      lastOperation.innerHTML = Number(lastOperation.innerHTML) - y;
    } else {
      substract();
    }
  } else if (lastOperator === "dividing") {
    if (!lastOperation.innerHTML && !currentOperation.innerHTML) {
      lastOperation.innerHTML = Number(lastOperation.innerHTML) / y;
    } else {
      divide();
    }
  } else if (lastOperator === "multiplication") {
    if (lastOperation.innerHTML && !currentOperation.innerHTML) {
      lastOperation.innerHTML = Number(lastOperation.innerHTML) * y;
    } else {
      multiply();
    }
  }
}

function add() {
  if (lastOperation.innerHTML === "") {
    lastOperation.innerHTML = currentOperation.innerHTML;
    currentOperation.innerHTML = "";
  } else {
    total =
      Number(lastOperation.innerHTML) + Number(currentOperation.innerHTML);
    lastOperation.innerHTML = total;
    lastNumber = Number(currentNumber.innerHTML);
    currentOperation.innerHTML = "";
  }
}
function substract() {
  if (lastOperation.innerHTML === "") {
    lastOperation.innerHTML = currentOperation.innerHTML;
    currentOperation.innerHTML = "";
  } else {
    total =
      Number(lastOperation.innerHTML) - Number(currentOperation.innerHTML);
    lastOperation.innerHTML = total;
    currentOperation.innerHTML = "";
  }
}
function divide() {
  // console.log(`Last Operation is ${lastOperation.innerHTML}`);
  if (lastOperation.innerHTML == "") {
    lastOperation.innerHTML = currentOperation.innerHTML;
    currentOperation.innerHTML = "";
  } else {
    if (currentOperation.innerHTML == "") {
      lastOperation.innerHTML = lastOperation.innerHTML;
    } else {
      total =
        Number(lastOperation.innerHTML) / Number(currentOperation.innerHTML);
      lastOperation.innerHTML = total;
      currentOperation.innerHTML = "";
    }
  }
  reset(lastOperation);
}
function multiply() {
  if (lastOperation.innerHTML == "") {
    lastOperation.innerHTML = currentOperation.innerHTML;
    currentOperation.innerHTML = "";
  } else {
    if (currentOperation.innerHTML == "") {
      lastOperation.innerHTML = lastOperation.innerHTML;
    } else {
      total =
        Number(lastOperation.innerHTML) * Number(currentOperation.innerHTML);
      lastOperation.innerHTML = total;
      currentOperation.innerHTML = "";
    }
  }
  reset(lastOperation);
}

//* if the result of the calculation is one of the following below, then we want the display to return to the original.
function reset(getLastNumber) {
  console.log("Inside the reset function");
  if (
    getLastNumber.innerHTML === "NaN" ||
    getLastNumber.innerHTML === "Infinity"
  ) {
    console.log("===================");
    getLastNumber.innerHTML = "";
  }
}
// function calcultaion() {
//   if (lastOperation.innerHTML === "") {
//     lastOperation.innerHTML = currentOperation.innerHTML;
//     currentOperation.innerHTML = "";
//   } else if (lastOperation.innerHTML && !currentOperation.innerHTML) {
//     // console.log(`last element is (second) = ${lastNumber}`);
//     let y = Number(lastOperation.innerHTML) * lastNumber;
//     lastOperation.innerHTML = y;
//   } else {
//     total =
//       Number(lastOperation.innerHTML) * Number(currentOperation.innerHTML);
//     lastOperation.innerHTML = total;
//     lastNumber = Number(currentOperation.innerHTML);
//     currentOperation.innerHTML = "";
//   }
// }
