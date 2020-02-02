function avoidObstacles(inputArray) {

  inputArray = inputArray.sort()

  let step = 2
  let verifyStep = true

  do {
    let stepFlag = false

    for(let i=0; i<inputArray.length; i++) {
      if(inputArray[i] % step == 0){
        step++
        stepFlag = true
        break
      }
    }

    if(stepFlag === false) break

  } while(verifyStep)

  return step
}

