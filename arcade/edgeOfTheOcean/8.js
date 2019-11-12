function matrixElementsSum(matrix) {

  let sum = 0
  let cols = []
  for(let line=0; line<matrix.length; line++){
      for(let col=0; col<matrix[line].length; col++){
          if(matrix[line][col] == 0) cols.push(col)
          if(cols.includes(col)) continue
          else sum += matrix[line][col]
      }
  }
  
  return sum
}