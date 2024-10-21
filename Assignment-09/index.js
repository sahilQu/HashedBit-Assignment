//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function scopeDemo() {
    if (true) {
        var varVariable = 'I am a var variable';
        let letVariable = 'I am a let variable';
        const constVariable = 'I am a const variable';

        console.log(varVariable);  // Output: I am a var variable
        console.log(letVariable);  // Output: I am a let variable
        console.log(constVariable); // Output: I am a const variable
    }

    // `varVariable` is accessible here because `var` is function-scoped.
    console.log(varVariable);  // Output: I am a var variable

    // `letVariable` and `constVariable` are block-scoped, so they are not accessible outside the block.
    // The following lines will throw a ReferenceError:
    // console.log(letVariable);  // Error: letVariable is not defined
    // console.log(constVariable); // Error: constVariable is not defined
}

scopeDemo();


//Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
function getSecondFruit() {
    return fruits[1];  
}
console.log(getSecondFruit());  

//Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr, newElement) {

    arr.push(newElement);
    
    arr.pop();
    
    return arr;
}

const myArray = ['Apple', 'Banana', 'Cherry'];
console.log(modifyArray(myArray, 'Date'));  // Output: ['Apple', 'Banana', 'Cherry']

//Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);    

//Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers1.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

//Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person = {
    name: 'John',
    age: 30,    
    occupation: 'Software Engineer'
};
function logGreeting() {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old, and I am a ${person.occupation}.`);
}
logGreeting();


//Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

function calculateRectangleArea(width, height) {
    return width * height;
}
console.log(calculateRectangleArea(5, 10)); 

//Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

const person1 = {
    name: 'John',
    age: 30,
    occupation: 'Software Engineer'
};
function getObjectKeys() {
    return Object.keys(person1);
}
console.log(getObjectKeys());

//Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.
// Function to merge two objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);  // Merge obj1 and obj2 into a new object
}

// Example usage
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);  // Output: { a: 1, b: 3, c: 4 }

//Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((acc, num) => acc + num, 0);
console.log(sum);   



