function sortByHeight(a) {
  
  let b = [...a]
  b.sort((a, b) => b - a)
  b = b.filter(el => el != -1)
  
  let newArray = a.map(el => el != -1 ? b.pop() : el)
  
  return newArray

}
