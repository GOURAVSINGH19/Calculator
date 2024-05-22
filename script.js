let firstOperand = "";
let secondOperand = "";
let currentOperator = null;
let resetScreen = false;

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".numButton");
const opButtons = document.querySelectorAll(".opButton");
const eqButton = document.querySelector(".eqButton");
const clearButton = document.querySelector(".clearButton");

// event listeners

//append the number to the display
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

//store the first operand and set the current operator
opButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setOperation(button.textContent);
    });
});
/* Event listener for equals button. On click, perform the calculation and display the result */
eqButton.addEventListener("click", () => compute());

/* Event listener for clear button. On click, clear all stored data and reset the display */
clearButton.addEventListener("click", () => clear());

/* Function to append the clicked number to the display */
function appendNumber(num) {
  if (resetScreen) {
    display.textContent = "";
    resetScreen = false;
  }
  display.textContent += num;
}

// set first numer
function setOperation(op) {
  if (currentOperator !== null) compute();
  firstOperand = display.textContent;
  currentOperator = op;
  resetScreen = true;
}

// give the result
function compute() {
  secondOperand = display.textContent;
  display.textContent = operator(currentOperator, firstOperand, secondOperand);
  currentOperator = null;
}


//clear on click C
function clear() {
  display.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperator = null;
  resetScreen = false;
}

function operator(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return a+b;
    case "-":
      return a-b;
    case "*":
      return  a*b;
    case "/":
      if (b == 0) return "eroor";
      else return a/b;
    case "%":
      return a%b;
    default:
        return b;
  }
}

