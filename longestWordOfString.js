function longestWord(stringOfWords) {
    // Give me back the longest word!
    let strings = stringOfWords.split(" ")
    let longestWord = ''
    let longestLength =0
    for(const string of strings){
        string.length >longestLength?longestWord = string : 0
    }
    return longestWord;
  }
  console.log(longestWord('a pair'))