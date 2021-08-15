// swap two variable using temp
let a = 5;
let b = 7;
console.log('Before Swap: a = ', a , ', b = ', b);
let temp = a;
a = b;
b = temp;
console.log('After Swap: a = ', a , ', b = ', b);

// Swap with addition and Substruction 
let x = 34;
let y = 65;

x = x + y;
y = x - y;
x = x - y;
console.log("After Swap: x = ", x , "y = ", y);

// This program used for jacaScript Program
let p = 23;
let q = 44;

[p , q] = [q, p];
console.log('After Swap: p = ', p, 'q = ', q);