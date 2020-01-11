function areSimilar(a, b) {

  if(a.length != b.length) return false
  if(a == b) return true

  let swap = 0
  for(let i=0; i<a.length; i++){
    index = null
    if(a[i] == b[i]){
      continue;
    } else {
      if(!b.includes(a[i])){
        return false
      } else {
        swap++
        index = b.findIndex( (el, ind) => el == a[i] && b[ind] !== a[ind])
        let aux = b[index]
        b[index] = b[i]
        b[i] = aux
      }
      if(swap > 1) return false
    }
  }
 
  return true
}

// [ 2, 1, 2, 1, 1, 1, 2 ]
// [ 1, 1, 2, 1, 2, 1, 2 ]