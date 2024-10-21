// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

const statesWithoutVowels = states.filter(state => {
  const firstLetter = state.charAt(0).toLowerCase();
  return !["a", "e", "i", "o", "u"].includes(firstLetter);
});

console.log(statesWithoutVowels);

// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = 'I love my India';

const reversedWords = str.split(' ').reverse().join(' ');
console.log(reversedWords);

// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = 'INDIA';


let arr = string.split('');
arr.splice(3, 1, 'O', 'N', 'E', 'S', 'I',);
let newString = arr.join('');
console.log(newString); // Output: 'INDONESIA'



// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str1 = 'The quick brown fox jumps over the lazy dog';
let count = 0;
let count2 = 0;
let strArr = str1.split('');
for (let i = 0; i < strArr.length; i++) {
  if (strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u') {
    count++;
  } else {
    count2++;
  }
}
console.log(`Vowels: ${count} and Consonants: ${count2}`);

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

console.log(correctfn("I love my India", "India", "INDIA"));    


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(num => num > 5);
console.log(answer);    

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.


const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const averageScores = students.map(student => {
  const average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
  return { name: student.name, average };
});

console.log(averageScores);

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  }
  return num;
}
console.log(repeatedSum(456));

// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}
console.log(countWords("The quick brown fox jumps over the lazy dog")); 

// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));


// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

  
  function calculateAverage(scores) {
    const scoreValues = Object.values(scores); // Get an array of the subject scores
    const total = scoreValues.reduce((sum, score) => sum + score, 0); // Sum all the subject scores
    return total / scoreValues.length; // Calculate the average
  }
  
  function getAverages(studentData) {
    const result = {};
  
    Object.keys(studentData).forEach(student => {
      const average = calculateAverage(studentData[student]); // Calculate average for each student
      result[student] = { average: average };
    });
  
    return result;
  }
  
  const averages = getAverages(students);
  console.log(averages);
  


