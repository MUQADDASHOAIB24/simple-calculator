#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "substraction", "multiplication", "divsion"],
  },
]);
console.log(answer);

//conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator")
}

console.log("THE END");
