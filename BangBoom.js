function multiple(x) {
    if(x%3===0 && x%5===0){
      return 'BangBoom'
    }
    else if(x%3===0)
  {
    return 'Bang'
  }
    else if(x%5===0){
      return 'Boom'
    }
    else {
      return 'Miss'
    }
  }

  function multiple(x) {
    return x%3===0 && x%5===0?'BangBoom':x%3===0?'Bang':x%5===0?'Boom':'Miss'
  }