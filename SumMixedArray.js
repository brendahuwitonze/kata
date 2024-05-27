function sumMix(x){
    let number = x.map(Number)
    return number.reduce((acc,curre)=> acc+curre,0)
    }

    console.log((sumMix([9, 3, '7', '3'])));


    //refactor
    function sumMix(x){
        return x.map(a=>+a).reduce((acc,curre)=>acc+curre,0)
        }