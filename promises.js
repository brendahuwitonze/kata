function promiseHelloWorld() {
    return new Promise((resolve,reject)=>{
      if(resolve){
        resolve('Hello World!')
      }
      else{
        reject("error")
      }
    })
    
   }