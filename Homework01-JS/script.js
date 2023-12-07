

console.log("**** Exercise 1 ****");

//** 1. I need value in  feet. 2. I need feet to meters ration. 3. To convert feet to meters i need to multiply the feet value with the ratio.    */

let feetValue = 100;
let feetToMetersRatio = 0.3048;
let convertedValue = feetValue * feetToMetersRatio;

console.log(convertedValue);

console.log("**** Exercise 2 ****");

//** 1. I need value for the first side of the rectangle. 2. I need value for the second side of the rectangle. 3. I need to multiply the values of both sides in order to get the area of the rectangle. */

let firstSide = 20;
let secondSide = 10;
let areaOfRectangle = firstSide * secondSide;

console.log(areaOfRectangle);

console.log("**** Exercise 3 ****");

//** 1. I need the value of the radius of the circle. 2. I need the value of pi-number. 3. I need to calculate the square number of the radius. 4. I need to multiply the pi-number with the square number of the radius in order to calculate the area of the circle. */

let radiusOfCircle = 15;
let piNumber = 3.14;
let squareRadius = radiusOfCircle * radiusOfCircle;
let areaOfCircle = piNumber * squareRadius;

console.log(areaOfCircle);

console.log("**** Homework01 ****");

//** 1. I need the price of 1 I-phone. I need to calculate the price of 30 I-phones. I need to calculate 5% tax of the price of 30 I-phones. 4. I need to sum the price of 30 I-phones with the calculated 5% tax for those 30 I-phones. */

let singleIphonePrice = 119.95;
let thirtyIphonesPrice = singleIphonePrice * 30;
let taxForThirtyIphones = thirtyIphonesPrice * 5 / 100;
let totalPrice = thirtyIphonesPrice + taxForThirtyIphones;

console.log(totalPrice);
