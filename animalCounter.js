function animalCalculator(depth) {
    var animal = 0;
    if (depth <= 10) {
        animal = depth * 50;
    }
    else if (depth <= 20) {
        var fistPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 100;
        animal = fistPart + secondPart;
    }
    else {
        var fistPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = fistPart + secondPart + thirdPart;
    }
    return animal;
}
const count = animalCalculator(21);
console.log("Total Animal is ", count);