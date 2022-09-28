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

console.log(
  addition.innerHTML.trim() +
    " " +
    substraction.innerHTML.trim() +
    " " +
    multiplication.innerHTML.trim() +
    " " +
    dividing.innerHTML.trim() +
    numbers[1].innerHTML
);

deleteBtn.addEventListener("click", deleteNumber);
clearBtn.addEventListener("click", clearDisplay);
pointBtn.addEventListener("click", addPoint);
equal.addEventListener("click", evaluate);
