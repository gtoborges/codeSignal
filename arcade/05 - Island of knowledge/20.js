function arrayMaximalAdjacentDifference(inputArray) {
  
  let difference = 0
  for(let i=1; i<inputArray.length; i++){
    let bigger
    let smaller

    if(inputArray[i-1] > inputArray[i]){
      bigger = inputArray[i-1]
      smaller = inputArray[i]
    } else {
      bigger = inputArray[i]
      smaller = inputArray[i-1]
    }

    if(difference < (bigger - smaller)) difference = bigger - smaller
  }

  return difference
}
