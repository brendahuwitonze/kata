function differenceInAges(ages){
    let min = Math.min(...ages)
    let max = Math.max(...ages)
    let ageDifference = max - min
 return [ Math.min(...ages),Math.max(...ages),ageDifference]
}