"use strict";

const inputBox = document.querySelector(".input-box");
const btnOne = document.querySelector(".btn-1");
const btnTwo = document.querySelector(".btn-2");
const btnThree = document.querySelector(".btn-3");
const btnFour = document.querySelector(".btn-4");
const btnFive = document.querySelector(".btn-5");
const btnSix = document.querySelector(".btn-6");
const btnSeven = document.querySelector(".btn-7");
const btnEight = document.querySelector(".btn-8");
const btnNine = document.querySelector(".btn-9");
const btnZero = document.querySelector(".btn-0");
const btnTimes = document.querySelector(".btn-times");
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
const btnDivide = document.querySelector(".btn-divide");
const btnEquals = document.querySelector(".btn-equals");

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

//MATHEMATICAL FUNCTIONS
const multiply = function (a, b) {
  return a * b;
};

const add = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return a / b;
};

//CHECK WHICH OPERATOR WAS USED
const checkOperator = function () {
  let sum = 0;

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  if (currentOperator === "+") {
    sum = add(firstNumber, secondNumber);
    return sum;
  } else if (currentOperator === "-") {
    sum = minus(firstNumber, secondNumber);
    return sum;
  } else if (currentOperator === "/") {
    sum = divide(firstNumber, secondNumber);
    return sum;
  } else if (currentOperator === "*") {
    sum = multiply(firstNumber, secondNumber);
    return sum;
  }
};

// NUMBER BUTTONS

btnOne.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 1;
    firstNumber += 1;
  } else {
    inputBox.textContent += 1;
    secondNumber += 1;
  }
});
btnTwo.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 2;
    firstNumber += 2;
  } else {
    inputBox.textContent += 2;
    secondNumber += 2;
  }
});
btnThree.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 3;
    firstNumber += 3;
  } else {
    inputBox.textContent += 3;
    secondNumber += 3;
  }
});
btnFour.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 4;
    firstNumber += 4;
  } else {
    inputBox.textContent += 4;
    secondNumber += 4;
  }
});
btnFive.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 5;
    firstNumber += 5;
  } else {
    inputBox.textContent += 5;
    secondNumber += 5;
  }
});
btnSix.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 6;
    firstNumber += 6;
  } else {
    inputBox.textContent += 6;
    secondNumber += 6;
  }
});
btnSeven.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 7;
    firstNumber += 7;
  } else {
    inputBox.textContent += 7;
    secondNumber += 7;
  }
});
btnEight.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 8;
    firstNumber += 8;
  } else {
    inputBox.textContent += 8;
    secondNumber += 8;
  }
});
btnNine.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 9;
    firstNumber += 9;
  } else {
    inputBox.textContent += 9;
    secondNumber += 9;
  }
});
btnZero.addEventListener("click", function () {
  if (currentOperator === "") {
    inputBox.textContent += 0;
    firstNumber += 0;
  } else {
    inputBox.textContent += 0;
    secondNumber += 0;
  }
});

//OPERATOR BUTTONS

btnPlus.addEventListener("click", function () {
  inputBox.textContent = "";

  if (currentOperator === "") {
    currentOperator = "+";
  } else {
    firstNumber = checkOperator();
    secondNumber = "";
  }
});

btnMinus.addEventListener("click", function () {
  inputBox.textContent = "";

  if (currentOperator === "") {
    currentOperator = "-";
  } else {
    firstNumber = checkOperator();
    secondNumber = "";
  }
});
btnDivide.addEventListener("click", function () {
  inputBox.textContent = "";

  if (currentOperator === "") {
    currentOperator = "/";
  } else {
    firstNumber = checkOperator();
    secondNumber = "";
  }
});
btnTimes.addEventListener("click", function () {
  inputBox.textContent = "";

  if (currentOperator === "") {
    currentOperator = "*";
  } else {
    firstNumber = checkOperator();
    secondNumber = "";
  }
});

btnEquals.addEventListener("click", function () {
  let sum = checkOperator();
  inputBox.textContent = sum;
  console.log(sum);
  firstNumber = sum;
  secondNumber = "";
  currentOperator = "";
});
