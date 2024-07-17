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

  //Initialization: We start by setting start and end to the first element of the list.
// Iteration: As we iterate through the list:
// If the current element continues the range (list[i] === end + 1), we update end.
// If it doesn't, we check if the current range is at least 3 numbers (end - start >= 2):
// If it is, we format it as start-end.
// If it's not, we add individual numbers.
// Reset start and end to the current element.
// Final Check: After the loop, we need to handle the last range similarly to the checks within the loop.
// Join: Finally, we join all the parts with commas to get the desired string format.
// This solution ensures that ranges of at least 3 numbers are formatted correctly, and individual numbers or pairs are listed separately.