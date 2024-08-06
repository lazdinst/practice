"use strict";
// Pre-defined test arrays
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [2, -3, 4, 7, -1, 0];
const testArray3 = [1, 3, 2];
const testArray4 = [2, 4, 6, 1, 5];
const target = 4;
// Question 1: Are there any 4s in the list?
function hasFour(arr) {
    // Implement your solution here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log("Q1 - testArray1 has 4:", hasFour(testArray1));
console.log("Q1 - testArray2 has 4:", hasFour(testArray2));
// Question 2: Are they all positive?
function allPositive(arr) {
    // Implement your solution here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // negative
            return false;
        }
    }
    return true;
}
console.log("Q2 - testArray1 all positive:", allPositive(testArray1));
console.log("Q2 - testArray2 all positive:", allPositive(testArray2));
// Question 3: Convert the input array into a running total array
// In: [1, 3, 2], Out: [1, 4, 6]
function runningTotal(arr) {
    // Implement your solution here
    let result = [];
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
        result.push(sum);
    });
    return result;
}
console.log("Q3 - Running total of testArray3:", runningTotal(testArray3));
console.log(" Expected: [1, 4, 6]");
// Question 4: Find the missing number in a unsorted array of sequential numbers
// In: [2,4,6,1,5], Out: 3
function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return Math.abs(expectedSum - actualSum);
}
console.log("Q4 - Find missing number in data:", findMissingNumber(testArray4));
