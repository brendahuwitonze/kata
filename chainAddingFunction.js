
// function sum(n) {
   
//     function add(x=0) {
//         let sum = n + x;
//         console.log(sum);
//     }
  
//     return add;
// }


// sum(2)(); 


    function differenceInAges(ages){
        return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];
      }


console.log(differenceInAges([82, 15, 6, 38, 35]),([6, 82, 76]))