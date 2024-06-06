function divCon(x){
    let sumNumbers1 = 0;
    let sumNumber2 = 0;
   let newArray = Array.from(x)
    for (let i of newArray){
     typeof i =='number'?sumNumbers1+=i:sumNumber2 +=Number(i);
    }
    return sumNumbers1 - sumNumber2
  }

// refactored

  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }
  console.log((divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14))