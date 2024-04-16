
function toCamelCase(str){

    let newWord= str.replace(/(_|-)/g, ' ').split(" ")
    for(let i=1;i<newWord.length;i++){
     newWord[i]= newWord[i][0].toUpperCase()+newWord[i].slice(1)
    }
    return newWord.join("")
    }
    
    
    console.log(toCamelCase("the_stealth_warrior")) //"theStealthWarrior",