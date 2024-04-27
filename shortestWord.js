function findShort(s){
    const arr = s.split(" ")
    var shortest = arr[0].length
    for (let i=0;i<arr.length;i++){
       if(arr[i].length < shortest){
         shortest = arr[i].length
  
  }
    }
    return shortest
  
    }
  
    
function findShort(s){
  return Math.min(...s.split(" ")).map (s => s.length);
}
console.log(findShort('helo how are you'))