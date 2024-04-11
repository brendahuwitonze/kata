
function SeriesSum(n) {
    // Happy Coding ^_^
    let sum =0;
    for(let i=0;i<n;i++){
      sum += 1/(3*i+1);
      
    }
    return sum.toFixed(2);
  }
  console.log(SeriesSum(1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 ))
  