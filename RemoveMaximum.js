
const removeSmallest = numbers=>

numbers.filter((_,index)=>index!=numbers.indexOf(Math.min(...numbers)))  
 
console.log(removeSmallest([2, 2, 1, 2, 1]))

//  assert.deepEqual(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
// assert.deepEqual(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
// assert.deepEqual(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
// assert.deepEqual(removeSmallest([]), [], "Wrong result for []");
// });



