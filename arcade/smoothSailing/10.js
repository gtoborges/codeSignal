function commonCharacterCount(s1, s2) {

  let cont = 0
  s2copy = s2.split("")
  for(let i=0; i<s1.length; i++){
    for(let j=0; j<s2copy.length; j++){
      if(s1[i] == s2copy[j]){
        cont++
        s2copy.splice(j, 1)
        break
      }
    }
  }
  
  
  return cont
}
