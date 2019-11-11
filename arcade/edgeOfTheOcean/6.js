function makeArrayConsecutive2(statues) {

  statues = statues.sort( (a, b) => a - b )
  
  let gaps = 0
  for(let i=1; i<statues.length; i++){
      let difference = statues[i]-statues[i-1]
      if(difference-1 > 0) {
          gaps += difference-1
      }
  }
  
  return gaps
}