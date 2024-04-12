
function compressedString(str){
    let count =1;
    let compressedWord ="";
    for(let i=0;i<str.length;i++){
        if(str[i]==str[i+1]){
            count++;
        }
      else{
        compressedWord += str[i] + count;
        count =1
        
     
      }
     
    }
    return compressedWord;
}

console.log(compressedString("AAAABBBCCC"))
