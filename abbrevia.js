// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let names = name.split(" ")
    let initialLetter=""
  for(let i of names ){
  initialLetter+= i.charAt(0)
  }
   return initialLetter.split('').join(".").toUpperCase()
  
  }
  console.log (abbrevName(("sam harris")))
  console.log(abbrevName("patrick feeney "))
  
  // Refactored
  function abbrevName(name){
      return name.split(' ').map(i=>i[0]).join(".").toUpperCase()
       }
        console.log (abbrevName(("sam harris")))  