function shapeArea(n) {
    
  let area = 1+(n-1)+(n-1)
  for(let i=2; i<=n; i++){
      area += 2*(1+(n-i)+(n-i))  
  }
  
  return area
}