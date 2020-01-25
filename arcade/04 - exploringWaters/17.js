function arrayChange(inputArray) {

  let increment = 0;
  for(let i=1; i<inputArray.length; i++){
    while(inputArray[i-1] >= inputArray[i]){
      inputArray[i]++;
      increment++;
    }
  }
  
  return increment
}