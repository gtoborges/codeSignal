function addBorder(picture) {
  
  let a = ""
  for(let i=0; i<picture[0].length+2; i++){
    a += '*'
  }
  
  picture.unshift(a)
  picture.push(a)
  
  for(let i=1; i<picture.length-1; i++){
    let aux = picture[i].split("")
    aux.unshift('*')
    aux.push('*')
    picture[i] = aux.join("")
  }
  
  return picture
}
