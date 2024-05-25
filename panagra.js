function isPangram(string){
    let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
     let strings = string.toLowerCase()
     return letter.every(x=> strings.includes(x))
     
   }

    var string = "The quick brown fox jumps over the lazy dog."
  console.log(isPangram(string))
    var string = "This is not a pangram."
console.log(isPangram(string))

