let speech = "I am a  good person. I don't snore at night";
// console.log(speech.length);
// console.log(speech[2]);
let count = 0;
for (let i = 0; i < speech.length; i++){
    // console.log(speech[i]);
    let char = speech[i];
    if (char == " " && speech[i - 1] != " "){
        count ++;
    }
}
count++;
console.log(count);