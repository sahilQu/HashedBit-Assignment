//Write code to display from 1 to 100 but just even numbers.

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operation) {
    let result;
    switch (operation) {  
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
    }
    return result;
}

console.log(calculate(10, 5, 'add'));      // 15
console.log(calculate(10, 5, 'subtract')); // 5
console.log(calculate(10, 5, 'multiply')); // 50
console.log(calculate(10, 5, 'divide'));   // 2


// You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.


function findTax(salary) {
    let taxAmount;
  
    switch (true) {
      case (salary > 0 && salary <= 500000):
        taxAmount = 0;  
        break;
      case (salary > 500000 && salary <= 1000000):
        taxAmount = salary * 0.10;  // 10% tax
        break;
      case (salary > 1000000 && salary <= 1500000):
        taxAmount = salary * 0.20;  // 20% tax
        break;
      case (salary > 1500000):
        taxAmount = salary * 0.30;  // 30% tax
        break;
      default:
        taxAmount = 'Invalid salary'; // In case a negative or invalid value is passed
    }
  
    return taxAmount;
  }
  
  console.log(findTax(400000));  // 0
  console.log(findTax(800000));  // 80000
  console.log(findTax(1200000)); // 240000
  console.log(findTax(2000000)); // 600000


// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProduct(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    const digit1 = n1 % 10;
    const digit2 = n2 % 10;
    sum += digit1 * digit2;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

const n1 = 6;
const n2 = 34;
const result = sumOfProduct(n1, n2);
console.log(result)