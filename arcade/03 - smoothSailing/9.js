function allLongestStrings(inputArray) {

  longestLength = 0
  for(let i=0; i<inputArray.length; i++){
    if(longestLength < inputArray[i].length) longestLength = inputArray[i].length
  }
  
  let newArray = inputArray.filter(string => string.length == longestLength)
  
  return newArray
}