function adjacentElementsProduct(inputArray) {

  let largestProduct = -1001
  for(let i=1; i<inputArray.length; i++){
      if(inputArray[i]*inputArray[i-1] > largestProduct) {
          largestProduct = inputArray[i]*inputArray[i-1]
      }
  }
  
  return largestProduct
}