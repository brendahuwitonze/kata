function sumOfMinimum(array){
let newArray = array.sort((a,b)=> a -b )
  let sum = newArray[0]+ newArray[1]
 return sum
 }
console.log(sumOfMinimum([19, 5, 42, 2, 77]))
