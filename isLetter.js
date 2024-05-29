function isItLetter(character) {
        let regx =/^[a-zA-Z]+$/
        return character.match(regx)?true:false
}


console.log((isItLetter('a')))
