function findAverage(array) {
    if(array.length===0){
      return 0;
    }
    else{
    let sum = array.reduce((acc,curre)=>acc + curre,0)
    let average = sum/array.length
    return average;
      }
  }

  //refactor
  function findAverage(array) {
    // your code here
    return array.length===0?0:array.reduce((acc,curre)=> acc+curre,0)/array.length
  }