// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.





function getCount(str) {
    let arrayOfVowels = ['a','e','i','o','u']
    let count = 0
     str.toLowerCase()
    for(let i of str){
    if(arrayOfVowels.includes(i)){
       count ++
    }
    }
    return count
    }
getCount('brendah1 is going to school')

    // refactor
    const getCounts =  (str)=>{
    return (str.match(/[aeiou]/ig)||[]).length
    }
    console.log(getCounts('brendah1 is going to school'))

