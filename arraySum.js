let numbers = [12, 34, 54, 76, 355, 45, 54, 46, 24];
let sum = 0;

for(let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers ", sum);