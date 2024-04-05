//Kata 1: Sum of positive
// Instructions
// You get an array of numbers, return the sum of all of the positives ones. Note: if there is nothing to sum, the sum is default to 0.

// let array =[-1,2,3,4,-5,7,-3,8,9]
// var allPositiveNumbers = array.filter(number=>number>0)
// let sumOfPositiveNumbers = allPositiveNumbers.reduce((acc,curre)=>acc+curre,0)
// console.log(sumOfPositiveNumbers)

// function sumOfPOsitive(arr){
//     var numbers = [...arr]
//     var positives= numbers.filter(num=>num>0)
//     return positives.reduce((acc,curre)=>acc+curre,0)
    
// }
// console.log(sumOfPOsitive([-1,2,3,4,-5,7,-3,8,9]))


function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep =>sheep==true).length
  }

 console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])) 