const display = document.getElementsByClassName("display")[0];
const addition = document.getElementsByClassName("operators")[0];
const subtraction = document.getElementsByClassName("operators")[1];
const multiplication = document.getElementsByClassName("operators")[2];
const dividing = document.getElementsByClassName("operators")[3];

let operation;
let sum = 0;
let input = 0;

const output = (event) => {
  operation = event.target.id;
  console.log(operation);
};

const inputVal = (event) => {
  input = event.target.id;
  let inputValue = document.getElementById(`${input}`);
  console.log(inputValue.innerHTML);
  // For some reason .value returns undefined.
};

if (operation === "addition") {
}
