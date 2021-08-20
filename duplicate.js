var id = [8, 9, 758, 8, 58, 9, 457, 632, 12, 9, 25, 36];
var uniqueId = [];
for (var i = 0; i < id.length; i++){
    var element = id[i];
    // console.log('Elemenet = ', element);
    var index = uniqueId.indexOf(element);
    // console.log('Index = ', index);
    if( index == -1){
        uniqueId.push(element);
        // console.log("Element = ", element);
    }
}
console.log(uniqueId);