function getArraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
let numbers = [12, 12, 24, 52, 100];
let result = getArraySum(numbers);
console.log("The sum is ", result);

const result1 = getArraySum([45, 55, 200]);
console.log("The sum is ", result1);