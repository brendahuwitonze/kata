function* nextElementGenerator(array) {
    let i=0
    while(true){
        yield array[i]
        i++
        if(i===array.length){
            i=0
        }
    }
}
const generator = nextElementGenerator([1,2,3,4,5,6,7])
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
