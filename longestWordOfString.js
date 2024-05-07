// function longestWord(stringOfWords) {
//     let strings = stringOfWords.split(" ")
//     let longestWord = ''
//     let longestLength =0
//     for(const string of strings){
//         string.length >longestLength?longestWord = string : 0
//     }
//     return longestWord;
//   }
//   console.log(longestWord('red blue grey'))



  function longestWord(stringOfWords) {
    let newWord = stringOfWords.split(" ");
  let longestWords = newWord[0]
  for(word of newWord){
      if(word.length>longestWord.length){
         longestWords = word
        
      }
  }
  return  longestWords
  }
  console.log(longestWord("brendah kami usanaseBrendah"))











