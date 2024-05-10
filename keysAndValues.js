function keysAndValues(obj) {
    const keys = Object.keys(obj);
    const keyValuePairs = keys.map(key => [key, obj[key]]);
    const keysArray = keyValuePairs.map(pair => pair[0]);
    const valuesArray = keyValuePairs.map(pair => pair[1]);
    
    return [keysArray, valuesArray];
  }





  function keysAndValues(data){
    return [Object.keys(data), Object.values(data)]
    
  }