// Write a function lettersOnOddIndexes that takes a string as an argument and returns a string containing all the word 
// characters (letters and numbers) located at odd indexes in the original string. 
// The function should exclude any special characters.
// lettersOnOddIndexes("Hello, World!") // "elWrd"
// lettersOnOddIndexes("JavaScript!") // "aacit"
// lettersOnOddIndexes("TypeScript") // "yecit"


//function declaration
//find the index of the letters 
//finding undex at odd and return its value
// /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/



function lettersOnOddIndexes(string){
    let word = ''
    let reversedCharacters = ''
    for(let i=0;i<=string.length;i++){
    if(i%2===0){
     word +=string[i]
    }
    }
    reversedCharacters = word.split("").reverse().join("").replace(/[^\w\s]/gi, '')
    console.log(reversedCharacters)
  }
  
  
  lettersOnOddIndexes("JavaScript!") 