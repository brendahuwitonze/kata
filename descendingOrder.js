function descendingOrder(n){
    let stringOfNumbers = String(n).split("")
    let sortedNumbers = stringOfNumbers.sort((a,b)=> b-a)
    return Number(sortedNumbers.join(""))
  }

  //refactor
  function descendingOrder(n){
    return Number(String(n).split("").sort((a,b)=>b-a).join(""))
   }