function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, first, last) {
  return operator(first, last);
}


const numberButtons = document.querySelectorAll("button.number");
const numberBtnsArr = Array.from(numberButtons);
let first, second, operator;
const results = document.querySelector(".results");
const operatorBtns = document.querySelectorAll(".operator");
const operatorBtnsArr = Array.from(operatorBtns);

function firstNumber(e) {
  if (first === undefined) {
    first = e.target.textContent;
  } else {
    first += e.target.textContent;
  }
  results.textContent = first;
}

for (let button of numberBtnsArr) {
  button.addEventListener("click", firstNumber)
  };


for (let button of operatorBtns) {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "+") {
      operator = add;
    } else if (e.target.textContent === "-") {
      operator = subtract;
    } else if (e.target.textContent === "x") {
      operator = multiply;
    } else {
      operator = divide;
    }
    first = Number(first);
    for (button of numberBtnsArr) {
      button.removeEventListener("click", firstNumber);
      button.addEventListener("click", (e) => {
        if (second === undefined) {
          second = e.target.textContent;
        } else {
          second += e.target.textContent;
        }
        results.textContent = second;
      });
    }
  });
}

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
  second = Number(second);
  results.textContent = operate(operator, first, second);
});
