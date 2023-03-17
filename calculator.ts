// calculator.ts
class Calculator {
  constructor() {}

  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

function main() {
  const calculator = new Calculator();

  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter an expression: ", (expression: string) => {
    const [operand1, operator, operand2] = expression.split(" ");
    const a = parseFloat(operand1);
    const b = parseFloat(operand2);

    let result: number;

    switch (operator) {
      case "+":
        result = calculator.add(a, b);
        break;
      case "-":
        result = calculator.subtract(a, b);
        break;
      case "*":
        result = calculator.multiply(a, b);
        break;
      case "/":
        try {
          result = calculator.divide(a, b);
        } catch (error) {
          console.error(error.message);
          process.exit(1);
        }
        break;
      default:
        console.error("Invalid operator");
        process.exit(1);
    }

    console.log(`The result is: ${result}`);
    rl.close();
  });
}

main();
