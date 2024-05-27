
//     function invert(array) {
//         return array.map(Math.abs);
        
// }
// console.log(invert([-1,2,-3,4,5,6]))

function invert(array) {
    return array.map(n=>(n*-1))
    
    }

console.log(invert([-5, -50, -25, 568]));