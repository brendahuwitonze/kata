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


// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


// function randomAge(age){
//     return Number(age[0])
//     }
    
    //Approach Two
    // function randomAge(str){
    //     var result= str.split(" ")
    //     return Number(result[0])
    // }
    // console.log(randomAge("5 Years old"))

    // var x= 1;

    // while (x<1000){

        // console.log(x)
        
        // x++;
        
        // }

// function reverse(reverseMe){
//     return reverseMe.reverse()
// }


// console.log(reverse("brendah"))

// function  factorial(num){
//     if(num===0||num===1){
//         return 1;
//     }
//     else {
//         return num*factorial(num-1)
//     }

// }
// console.log(factorial(3))


// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function numbers(n){
// var array = n.split("").map(Number);
// let highest =array[0];
// let  lowest =array[0];
// for (let i=1;i<array.length;i++){
//     if(array[i]>highest) highest=array[i]
//     if(array[i]<lowest)lowest=array[i]
// }
// return highest + " "+ lowest
// }
// function highAndLow(numbers){
//     var newNumber = numbers.split(" ");
//     return `${Math.max(...newNumber)} ${Math.min(...newNumber)}`
//   }
// console.log(highAndLow("12345"))

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }


// items.forEach(items=>copyItems.push(items));
// // console.log(copyItems)
// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

// let num = [];
// for(let i=0; i<test.length; i++){
//     let tim = test[i] * 1000;
//     num.push(tim);

//     test.forEach(element)
// }
// console.log(num)


// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
//     19, 300, 3775, 299, 36, 209, 148, 169, 299,
//     6, 109, 20, 58, 139, 59, 3, 1, 139
// ];

// // Write your code here
// test.forEach(function(item, index){
//     if(item%3===0){
//         // The commented statements below would not be able to change the value of item
//         // because the `item` is a COPY of actual element, while actual is test[index]
//         // item = item + 100;
//         // console.log("The updated element is "+item+" and actual is "+test[index]);
//         test[index]=test[index]+100;
//     }
//     //else 
//     //    console.log("Element "+item+" is not divisible by 3");
// });
// console.log(test);


//Implement a function called `combineNumbers` that receives an array of even and odd numbers mixed, and returns a new array which only contain two elements.

// The first element should be all even numbers from the original array sorted and concatenated into a string. 

// The second element should be all odd numbers from the original array sorted and concatenated into a string 

// examples:

// function compressedString(str){
//     let count =1;
//     let compressedWord ="";
//     for(let i=0;i<str.length;i++){
//         if(str[i]==str[i+1]){
//             count++;
//         }
//       else{
//         compressedWord += str[i] + count;
//         count =1
        
     
//       }
     
//     }
//     return compressedWord;
// }

// console.log(compressedString("AAAABBBCCC"))




// function toCamelCase(str){

//   let newWord= str.replace(/(_|-)/g, ' ').split(" ")
//   for(let i=1;i<newWord.length;i++){
//    newWord[i]= newWord[i][0].toUpperCase()+newWord[i].slice(1)
//   }
//   return newWord.join("")
//   }
  
  
//   console.log(toCamelCase("the_stealth_warrior")) //"theStealthWarrior",


// function sumOfMinimum(array){
//   let minimum1 
//   let minimum2 
//   for (let i =0;i<=array.length;i++){
//   var n = array[i]
//   if
//   return n
//   }

//  }
// console.log(sumOfMinimum([19, 5, 42, 2, 77]))



function toBinary(array){
    return parseInt(array.join(''), 2
)
 }
console.log(toBinary([0, 0, 0, 1]))







