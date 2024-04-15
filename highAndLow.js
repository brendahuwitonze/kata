// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function numbers(n){
var array = n.split(" ").map(ele=>Number(ele)); 
console.log(array)
let highest =array[0];
let  lowest =array[0];
for (let i=1;i<array.length;i++){
    if(array[i]>highest) highest=array[i]
    if(array[i]<lowest)lowest=array[i]
}
return highest + " "+ lowest
}
console.log(numbers(("1 2 3 4 5")))