
function spot(s1,s2){
    let unique =[]
    for(let i in s1){
        if(s1[i]!==s2[i]){
            unique.push(Number(i))
        }
    }
    return unique
}
console.log(spot("abcdefg","abcqetg"))