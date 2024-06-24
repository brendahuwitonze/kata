
function longestWord(stringOfWords) {
  let strings = stringOfWords.split(" ")
  console.log(strings)
     let longestWord = strings[0]
     for(let string of strings){
        longestWord = string.length >=longestWord.length?string : longestWord
     }
     return longestWord;
   }


   //Refactor

   function longestWord(stringOfWords) {
    return stringOfWords.split(" ").reduceRight((a,b)=>b.length>a.length?b:a)
     
     
   }











