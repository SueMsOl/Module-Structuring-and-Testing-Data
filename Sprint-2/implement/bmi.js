// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m)  .

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place
function BMI(weight,height){
    let heightSquared = height*height;
    let BMICalc = (weight/heightSquared).toFixed(1);
    return `Your BMI is:${BMICalc}`;
}
console.log(BMI(65,1.72));
//what if i wanted to ask questions first? prompt is not working here. i need something more complex named readline ... 
function printManyTimes(str) {
    "use strict";
  
    const SENTENCE = str + " is cool!";
    let output = ""; // Store the full output here
  
    for (let i = 0; i < str.length; i += 2) {
      output += SENTENCE + "<br>"; // Adds each sentence with a line break
    }
  
    // Find the element with id 'output' and set its HTML content
    document.getElementById("output").innerHTML = output;
  }
  
  // Call the function
  printManyTimes("freeCodeCamp");
  