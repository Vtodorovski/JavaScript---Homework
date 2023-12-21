console.log("CONNECTED")

console.log("**** Homework01 ****");
function tellStory(array) {
    console.log(`This is ${array[0]}. ${array[0]} is a nice person. Today they are ${array[1]}. They are ${array[2]} all day. The end.`);
}
let story = ["Vladimir", "relaxed", "coding"];

tellStory(story);

console.log("Homework02");

console.log("---- Solution 1 ----")
function sumOfNumbers(array) {
    let sum = array[0] + array[1] + array[2] + array[3] + array[4];
    return sum;
}
let numbers = [5, 10, 15, 20, 25]

let resultOne = sumOfNumbers(numbers);
console.log(`Sum of numbers in your array is: ${resultOne}`)

console.log("---- Solution 2 - with for loop ----")


function sumOfNumbersOne(array) {
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return "ERROR- one of the elements in the array is not a number"
        }
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;

}
let numArray = [5, 10, 13, 15, 34];
let result = sumOfNumbersOne(numArray);
console.log(`Sum of numbers in your array is: ${result}`);
let numArrayOne = [4, 15, 20, "Hello", 30]
let resultFour = sumOfNumbersOne(numArrayOne);
console.log(`Sum of numbers in your array is: ${resultFour}`);


console.log("**** Homework03 ****");

function bigString(arrayOne) {

    return arrayOne.join(" ");
}

let array = ["My", "name", "is", "Vladimir", ".", "I", "am", "27", "years", "old", "."];
let resultThree = bigString(array);
console.log(resultThree);



