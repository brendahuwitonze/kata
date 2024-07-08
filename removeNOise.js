function removeNoise(str){
    const noiseChar = ['%','$','&','/','#','·','@','|','º','\\','ª']
      const string = str.split("").filter(eleme=>!noiseChar.includes(eleme))
    return string .join("")
  }