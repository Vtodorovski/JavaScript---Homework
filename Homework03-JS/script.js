console.log("CONNECTED");

console.log("**** Exercise 2****");

function convertCelsius(celsiusValue) {
    if(isNaN(celsiusValue)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    let convertedFahrenheit = celsiusValue * 1.8 + 32;
    console.log(convertedFahrenheit);
    document.write("Converted Fahrenheit value is: ", convertedFahrenheit);
}

convertCelsius(30);

function convertFahrenheit(fahrenheitValue) {
    if(isNaN(fahrenheitValue)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    let convertedCelsius = (5 / 9) * (fahrenheitValue - 32);
    console.log(convertedCelsius);
    document.write("***Converted Celsius value is: ", convertedCelsius);
}

convertFahrenheit(86);



console.log("**** Exercise 2 - with prompt ****");


let celsiusInputTwo = prompt("Enter value for Celsius.");

function convertCelsius1(celsiusInputPar) {
    if(isNaN(celsiusInputTwo)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }else{
    convertedFahrenheitTwo = celsiusInputPar * 1.8 + 32;
    // console.log("Converted Celsius value to Fahrenheit is: ", convertedFahrenheitTwo);
    return convertedFahrenheitTwo;
    }

}
let finalRes = convertCelsius1(celsiusInputTwo);
// console.log(finalRes);
document.write(`****Converted value is ${finalRes}`);



console.log("**** Exercise 3 ****");

let currentYear = new Date().getFullYear();

function calculateAge(birthYear, currentYear){
    if(isNaN(birthYear)){
        console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    if(isNaN(currentYear)){
        console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    let result = currentYear - birthYear;
    console.log(result)
    document.write(`****You are ${result} years old`);
    return result;
}

calculateAge(1996, currentYear );
calculateAge(2000, currentYear);
calculateAge(1987, currentYear);

console.log("**** Homework01 ****");


function typeOfInput(type){
    let input = typeof(type);
    return input;
    
}


let result = typeOfInput(200);
console.log(result);

let resultOne = typeOfInput("Name");
console.log(resultOne);

let resultTwo = typeOfInput();
console.log(resultTwo);

let resultThree = typeOfInput(null);
console.log(resultThree);

let resultFour = typeOfInput(true);
console.log(resultFour);

console.log("**** Homework02 ****");

let dogYear = parseFloat(prompt("Enter your dogs age: "));
let humanYear = parseFloat(prompt("Enter your age:"))

function convertedDogToHumanAge(dogAge){
    let result = dogAge * 7;
    if(isNaN(dogAge)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }else{
    return result;
    }
}

function  convertedHumanToDogAge(humanAge){
    let result = humanAge / 7;
    if(isNaN(humanAge)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }else{ 
    return result;
    }
}

let finalDogAge = convertedDogToHumanAge (dogYear,);
// console.log (`Your dogs age converted to human age is: ${finalDogAge}`); 
document.write(`****Your dogs age converted to human age is: ${finalDogAge}`);

let finalHumanAge = convertedHumanToDogAge (humanYear);
// console.log (`Your age converted to dog age is: ${finalHumanAge}`); 
document.write(`****Your age converted to dog age is: ${finalHumanAge}`);


console.log("**** Homework03****")

function cashAtm(requiredCash, availibleCash){
    let moneyLeft = availibleCash - requiredCash;
    if(isNaN(requiredCash)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    if(isNaN(availibleCash)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }
    if(requiredCash > availibleCash){
        // console.log("Sorry, you dont have enough money");
        document.write("Sorry, you dont have enough money");
        return;
    }else{
        // console.log(`You have ${moneyLeft} left on your account`);
        document.write(`****You have ${moneyLeft} left on your account`);
        return requiredCash;
    } 

}

let requiredMoney = parseFloat(prompt("Enter the ammount of money you request: "))
let availibleMoney = parseFloat(prompt("Availible ammount of money: "))

let resultAtm = cashAtm(requiredMoney, availibleMoney);
// console.log(`The withdrawn of your transaction is: `, resultAtm);
document.write(`****The withdrawn of your transaction is: `, resultAtm);





