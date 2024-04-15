
// using for loop

// function doubleChar(str){
//     var word = '';
//     for(let i=0;i<str.length;i++){
//         word = word+str[i]+str[i]
//     }
//     return word
// }



function doubleChar(str){
   return str.split("").map(n=>n.repeat(2)).join('')
 
}
console.log(doubleChar("brendah"))