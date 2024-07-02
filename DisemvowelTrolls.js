function disemvowel(str) {
    //identify the vowel in the strings
    //return the string with the absence of vowels
     //steps
    //1 split the string into an array 
    //loop through the array
    //if not the vowel push it 
    //return the new string joined
    let vowels = ['a','A', 'e','E', 'i','I','o','O','u','U']
    let string = str.split('')
    let loopedVowel =[]
    let newString = []
    for(let i of string){
    if(!vowels.includes(i)){
     newString.push(i)
    }
    }
   return newString.join("")
  }