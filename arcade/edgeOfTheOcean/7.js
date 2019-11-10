function makeArrayConsecutive2(statues) {

  let max = Math.max(...statues)
  let min = Math.min(...statues)
  statues = statues.sort( (min, max) => min - max )
  
  let gaps = 0
  for(let i=1; i<statues.length; i++){
      let difference = statues[i]-statues[i-1]
      if(difference-1 > 0) {
          gaps += difference-1
      }
  }
  
  return gaps
}