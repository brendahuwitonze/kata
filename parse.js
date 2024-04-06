//Approach one
function randomAge(age){
    return Number(age[0])
    }
    
    //Approach Two
    function randomAge(str){
        var result= str.split(" ")
        return Number(str[0])
    }
    console.log(randomAge("5 Years old"))