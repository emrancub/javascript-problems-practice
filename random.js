let number = 12.55232;
console.log('Orginal Number is ', number);

let resultFloor = Math.floor(number);
let resultCeil = Math.ceil(number);
let resultRound = Math.round(number);

console.log("Floor Number is ", resultFloor);
console.log("Ceil Number is ", resultCeil);
console.log("Round Number is ", resultRound);

// Random Number Check
let resultRandom = Math.random()*10;
let randomRound = Math.round(resultRandom);
console.log("Random Number is " , randomRound);

// Random Number using for loop
for(let i = 0; i < 10; i++){
    let randomResult = Math.random()*6;
    let roundRandom = Math.round(randomResult);
    console.log(roundRandom);
}