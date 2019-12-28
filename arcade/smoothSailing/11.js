function isLucky(n) {
  
  let firstSum = 0
  let secondSum = 0
  
  n = String(n).split("")
  
  for(let i=0; i<n.length; i++){
    if(i<n.length/2){
      firstSum += Number(n[i])
    } else {
      secondSum += Number(n[i])
    }
  }
  
  if(firstSum == secondSum) return true
  else return false
  
}
