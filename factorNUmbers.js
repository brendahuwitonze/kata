function factor(x,y){
    if(x%y===0){
        return `${y} is a factor of ${x}`
    }
    else if(x%y!==0){
        return `${y} is not a factor of ${y}`;
    }
}
console.log(factor(6 ,3));