function personalisedMesage(name,owner){
    if(name ===owner && name !==null){
        return `Hello boss`
    }
    else{
        return `Hello guest`
    }
}
console.log (personalisedMesage("Brendah","Brendah"))