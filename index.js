let userName = "";

if (userName) {
  console.log(`Hello ${userName}!`);
} else {
  console.log("Hello, guest!");
}

let num1 = 15;
let num2 = 7;

function mathOp(num1, num2, operator) {
  if (operator === "add") {
    return num1 + num2;
  } else if (operator === "subtract") {
    return num1 - num2;
  } else if (operator === "multiply") {
    return num1 * num2;
  } else if (operator === "divide") {
    return num1 / num2;
  } else if (operator === "modulus") {
    return num1 % num2;
  } else {
    return `${operator} is an invalid operation.`;
  }
}

console.log(mathOp(num1, num2, "add"));
