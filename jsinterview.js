// Implement a function that calculates the sum of the integers inside a string. For example, in the 
// string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.


//function
//split the string to access the numbers inside
//loop in the string
//uses a condition to check for the numbers(typeof operator)
//create the variable to store the numbers inside the string 
//add them together to find the sum

function sum(string){
    // let number =[]
    // let stringArray=string.split(" ")
    // for(let i of stringArray){
    //  let changeNumber = parseInt(i)
    //     if(typeof changeNumber === number)
    //         console.log(changeNumber)
    //     }
    const regex = /\d+/g;
return string.match(regex).reduce((acc, curr)=> {
    acc+=Number(curr)
    return acc
},0)
    }

console.log (sum(("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog")))
