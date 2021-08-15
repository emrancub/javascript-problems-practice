let marks = [45, 85, 96, 65, 74, 36, 48, 45, 96, 85];
let max = marks[0];
for(let i = 0; i < marks.length; i++){
    let element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log("Highest value is ", max);