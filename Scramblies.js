function scramble(str1, str2) {
    let counter ={}
    for(let char of str1){
      if(counter[char]){
        counter[char]++
      }
      else{
        counter[char]=1
      }
    }
    for(let char of str2){
      if(!counter[char]||counter[char]<=0){
        
        return false
    }
    counter[char]--
      }
    return true
  }
  console.log(scramble('rkqodlw','world' ))  