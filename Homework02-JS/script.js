console.log("CONNECTED");

console.log("**** Exercise 1 ****");

let userInput = prompt("How much money do you have: ");
let parsedUserInfo = parseFloat(userInput);

if(parsedUserInfo >= 50){
    console.log("Nice, you can buy these headphones.");
}
else {
    console.log("Sorry, you dont have enough money to buy these headphones.");
}

console.log("**** Homework02 ****");
//** 1. Ask user for input(which year was borm) 2. Define the condition(Chinese Zodiac formula: (year - 4) % 12) 3. Create controled structure to check the type of Chinese Zodiac. */

// SOLUTION 1 - using IF/ELSE

let yearBorn = prompt("What year are you born: ");
let parsedyearBorn = parseFloat(yearBorn);
let conditionFormula = (parsedyearBorn - 4) % 12;
if(conditionFormula === 0){
    console.log("Your Chinese Zodiac is Rat.");
} else if(conditionFormula === 1){
    console.log("Your Chinese Zodiac is Ox.");
} else if(conditionFormula === 2){
    console.log("Your Chinese Zodiac is Tiger.");
} else if(conditionFormula ===3){
    console.log("Your Chinese Zodiac is Rabbit.");
} else if(conditionFormula === 4){
    console.log("Your Chinese Zodiac is Dragon.");
} else if(conditionFormula === 5){
    console.log("Your Chinese Zodiac is Snake.");
} else if(conditionFormula === 6){
    console.log("Your Chinese Zodiac is Horse.");
} else if(conditionFormula === 7){
    console.log("Your Chinese Zodiac is Goat.");
} else if(conditionFormula === 8){
    console.log("Your Chinese Zodiac is Monkey.");
} else if(conditionFormula === 9){
    console.log("Your Chinese Zodiac is Rooster.");
} else if(conditionFormula === 10){
    console.log("Your Chinese Zodiac is Dog.");
} else if(conditionFormula === 11){
    console.log("Your Chinese Zodiac is Pig.");
} else{
    console.log("Invalid input.");
};

// SOLUTION 2 - using SWITCH STATEMENTS

switch(conditionFormula){
    case 0 :
        console.log("Your Chinese Zodiac is Rat.");
        break;
    case 1 :
        console.log("Your Chinese Zodiac is Ox.");
        break;
    case 2 :
        console.log("Your Chinese Zodiac is Tiger.");
        break;
    case 3 :
        console.log("Your Chinese Zodiac is Rabbit.");
        break;
    case 4 :
        console.log("Your Chinese Zodiac is Dragon.");
        break;
    case 5 :
        console.log("Your Chinese Zodiac is Snake.");
        break;
    case 6 :
        console.log("Your Chinese Zodiac is Horse.");
        break;
    case 7 :
        console.log("Your Chinese Zodiac is Goat.");
        break;
    case 8 :
        console.log("Your Chinese Zodiac is Monkey.");
        break;
    case 9 :
        console.log("Your Chinese Zodiac is Rooster.");
        break;
    case 10 :
        console.log("Your Chinese Zodiac is Dog.");
        break;
    case 11 :
        console.log("Your Chinese Zodiac is Pig.");
        break;
    default :
        console.log("Invalid input.");
        break;
};


