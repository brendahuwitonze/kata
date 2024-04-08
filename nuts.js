function addSquare(a,b){
    function squares(x){
    return x*x;
}
    return squares(a)+squares(b);
}
console.log(addSquare(2,3))