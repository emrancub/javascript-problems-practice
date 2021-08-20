function reverseString(str){
    var reverse = "";
    for (var i = 0; i < str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = "Hello Align Bhai Brother";
var forAlign = reverseString(statement);
console.log(forAlign);