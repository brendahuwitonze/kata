function solution(list){
    let result = [];
      let start = list[0];
      let end = start;
  
      for (let i = 1; i < list.length; i++) {
          if (list[i] === end + 1) {
              end = list[i];
          } else {
              if (end - start >= 2) {
                  result.push(`${start}-${end}`);
              } else if (end === start) {
                  result.push(`${start}`);
              } else {
                  result.push(`${start},${end}`);
              }
              start = list[i];
              end = start;
          }
      }
  
      if (end - start >= 2) {
          result.push(`${start}-${end}`);
      } else if (end === start) {
          result.push(`${start}`);
      } else {
          result.push(`${start},${end}`);
      }
  
      return result.join(',');
  }