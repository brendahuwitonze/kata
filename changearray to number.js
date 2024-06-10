function toNumberArray(stringarray){
    return stringarray.map(Number)
}
console.log(toNumberArray(['1','2','3']))

//refactor
function toNumberArray(stringarray){
    return stringarray.map(e=> + e)
}
console.log(toNumberArray(['1','2','3']))