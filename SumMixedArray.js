function sumMix(x){
    let number = x.map(Number)
    return number.reduce((acc,curre)=> acc+curre,0)
    }

    console.log((sumMix([9, 3, '7', '3'])));