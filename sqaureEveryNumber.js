function squareDigits(num){
    let newNum=num.toString().split("").map(n=>n*n).join("")
    let number = parseInt(newNum)
    return number
  }
  console.log(squareDigits(2112));