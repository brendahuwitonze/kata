function fakeBin(x){
    return x.split("").map(n=>n<5?n='0' : n='1').join("")
  
  }