// BASIC LESSONS LEARNT BEFORE PROJECT

// 1. Create a variable called myAge and set it's value to my age
let myAge = 12;
// 2. Log the myAge variable to the console
console.log(myAge);
// Note: Trying to console.log the variable myAge before initialization will lead to a reference error, because javascript actually starts running from top to bottom.


// BASIC MATHEMATICS
// 1. Create two variables, newAge and humanDogRatio
let newAge = 15;
let humanDogRatio = 105 // 1 human year is equivalent to 7 dog years
// 2. Multiply the two together and store the result in myDogAge
let myDogAge = newAge * humanDogRatio;
console.log(myDogAge);

// REASSIGNING AND INCREMENT
let count = 12;

// count can be reassigned by;
count = 16;
// 16 would be logged back to the console

// to increment,
count = count + 1

//to decrement;
count = count -1
// and this should give 17


// SIMPLE TASK
// 1. Create a variable, myBonuspoint, intialize it as 50, increment it by 100, decrement it down to 25, finally increment it to 70

let myBonusPoint = 50;
myBonusPoint = myBonusPoint + 100;
myBonusPoint = myBonusPoint - 25;
myBonusPoint = myBonusPoint + 70;

console.log(myBonusPoint);
