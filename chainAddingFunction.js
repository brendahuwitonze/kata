
function sum(n) {
   
    function add(x=0) {
        let sum = n + x;
        console.log(sum);
    }
  
    return add;
}


sum(2)(); 
