// 5! = 1*2*3*4*5
function factorialRecuresion(num) {
    if (num == 1) {
        return 1;
    }
    else {
        return num * factorialRecuresion(num - 1);
    }
}
const result = factorialRecuresion(5);
console.log('Factorial = ', result);