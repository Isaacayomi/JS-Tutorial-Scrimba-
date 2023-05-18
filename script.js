// // BASIC LESSONS LEARNT BEFORE PROJECT

// // 1. Create a variable called myAge and set it's value to my age
// let myAge = 12;
// // 2. Log the myAge variable to the console
// console.log(myAge);
// // Note: Trying to console.log the variable myAge before initialization will lead to a reference error, because javascript actually starts running from top to bottom.


// // BASIC MATHEMATICS
// // 1. Create two variables, newAge and humanDogRatio
// let newAge = 15;
// let humanDogRatio = 105 // 1 human year is equivalent to 7 dog years
// // 2. Multiply the two together and store the result in myDogAge
// let myDogAge = newAge * humanDogRatio;
// console.log(myDogAge);

// // REASSIGNING AND INCREMENT
// let count = 12;

// // count can be reassigned by;
// count = 16;
// // 16 would be logged back to the console

// // to increment,
// count = count + 1

// //to decrement;
// // count = count -1
// // and this should give 17


// // SIMPLE TASK
// // 1. Create a variable, myBonuspoint, intialize it as 50, increment it to 100, decrement it down to 25, finally increment it to 70

// // let myBonusPoint = 50;
// // console.log(myBonusPoint)

// // myBonusPoint = myBonusPoint + 50;
// // console.log(myBonusPoint)

// // myBonusPoint = myBonusPoint - 25;
// // console.log(myBonusPoint)

// // myBonusPoint = myBonusPoint + 70;
// // console.log(myBonusPoint)


// THE ONCLICK EVENT LISTENER
// function increment(){
// console.log("HI there")
// }

// WRITING YOUR FIRST FUNCTION
// create a function that logs out the number 42 to the console, call or invoke the function

// SOLUTION
// function number(){
//     console.log(42);
// }

// number();


// NEW TASK USING FUNCTION
// Create a function that logs out the sum of all the lap times
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// SOLUTION
// function lapTime(){
//     let totalLapTiime = lap1 + lap2 + lap3;
//     console.log(totalLapTiime);
// }

// lapTime();



// A FUNCTION THAT INCREMENTS
// let lapsCompleted = 0
// create a function that increments the lapsCompleted variable with one
//Run or invoke it three times

// function increase(){
//     lapsCompleted = lapsCompleted + 1;
//     console.log(lapsCompleted)
// }
// increase();
// increase();
// increase();


// INCREMENT AND DECREMENT ON CLICK FOR THE SUBWAY COUNTER APP (1ST PROJECT)
let count = 0;
function increment(){
    count += 1;
    document.getElementById("count-el").innerText = count;
    // console.log(count);
}


function decrement(){
    count -= 1;
    document.getElementById("count-el").innerText = count;
    // console.log(count);
}



// let saveEl = document.getElementById("save-el");
// let dashCount = count + " - ";
// saveEl.innerText = dashCount;



// QUICK EXPLANATION ABOUT DOM (Dcoument Object Model)
// It's just how you use javascript to modify a website


// STRINGS
// String is a data type used to store string variables, and it's always stored in either a double quotes or a single quotes e.g "Prime" or 'Prime'
// let message = "You have three new notifications"
// console.log(message);

// String concantenation is basically adding two strings together to make it a whole string.
// let firstName = "prime";
// let secName = "Prime";

// let fullName = firstName + " " + secName;
// console.log(fullName);

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Prime";
// let greetings = "Welcome "

// welcomeEl.innerText = greetings + name;












