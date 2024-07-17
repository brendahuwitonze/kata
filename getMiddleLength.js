function getMiddle(s)
{
  let lengths = s.length
  let middleChar = Math.floor(lengths/2)
  if(lengths%2===0){
    return s[middleChar-1]+s[middleChar]
  }else{
      return s[middleChar]
  }
}


/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/