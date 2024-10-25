const num = 56.5678;
console.log(num);
// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5678 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers
const wholeNumberPart = Math.floor(num);
console.log("wHole number is:"+ wholeNumberPart);
const decimalPart = num - wholeNumberPart;
console.log("decimal part is:"+ decimalPart);
const roundedNum = Math.round(num);
console.log("rounded number is:"+ roundedNum);