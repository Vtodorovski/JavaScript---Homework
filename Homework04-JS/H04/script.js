console.log("Connected")
console.log("**** Homework04 ****")


function numbers(){
    let result = "";   
    for(let i = 1; i <=20; i++){
        if(i % 2 === 0){
            result += ` ${i}\n`;
        }else{
            result += `${i}`;
        }
    }

    console.log(result);
}

numbers();

console.log("**** Homework05 ****")

function sumMaxMin(arrayOfNumbers){
    for(let i = 0; i < arrayOfNumbers.length; i++){
        if(isNaN(arrayOfNumbers[i])){
            
            return "ERROR";
        }
    }
    max = Math.max(...arrayOfNumbers);
    let min = Math.min(...arrayOfNumbers);
    let sum = max + min;
    return `Max value is:${max}, Min value is:${min}, Sum of max and in value is: ${sum}`
    
}

let numbersOne = [1, 2, 3, 4 ,5]
let result = sumMaxMin(numbersOne);
console.log(result);

console.log("**** Homework06 ****")


function fullNames(arrayOne, arrayTwo){
    let full = [];
    for(let i = 0; i < arrayOne.length; i++){
        
        full = [`${arrayOne[i]} ${arrayTwo[i]}`];
        console.log(full)

       }
   
}

let firstNames = ["Vladimir", "Aleksandar", "Bob"]
let lastNames = ["Todorovski", "Petrov", "Bobski"]
fullNames(firstNames, lastNames);










