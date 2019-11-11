function almostIncreasingSequence(sequence) {

  let possibleIncreasingSequence = false
  let newSequence
  for(let i=0; i<sequence.length; i++){
    newSequence = []
    newSequence = sequence.filter( (element, index) => index != i ) 
    let notSequential = true
    for(let j=1; j<newSequence.length; j++){
        if(newSequence[j-1] >= newSequence[j]) {
            notSequential = false
            break
        }
    }
    
    if(notSequential) {
        possibleIncreasingSequence = true
        break
    }
  }
  
  return possibleIncreasingSequence
}