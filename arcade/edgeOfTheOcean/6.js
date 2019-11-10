function makeArrayConsecutive2(statues) {

  statues = statues.sort()

  let gaps = 0
  for(let i=1; i<statues.length; i++){
      let difference = statues[i]-statues[i-1]
      if(difference-1) { //difference-1 should be zero if there is no gap
          gaps += difference-1
      }
  }
  
  return gaps
}
