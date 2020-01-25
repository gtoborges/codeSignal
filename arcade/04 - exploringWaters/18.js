function palindromeRearranging(inputString) {

  let array = [... new Set (inputString.split(''))]
  
  let oddLetters = 0
  for(let letter of array){
    let count = 0
    for(let i=0; i<inputString.length; i++){
      if(letter == inputString[i]) {
        count++
      }
    }
    if(count % 2 !== 0) oddLetters++
  }

  if(oddLetters > 1) return false
  else return true
}


// function palindromeRearranging(inputString) {

//   let onlyException = 0;
//   inputString = inputString.split('')
  
//   do {
//     if(onlyException>1) return false
//     let letter = inputString.splice(0, 1).pop()
//     if(inputString.includes(letter)){
//       let index = inputString.findIndex(el => el == letter)
//       inputString.splice(index, 1)
//     } else {
//       onlyException++;
//     }
//   } while (inputString.length>2)
  
//   if(inputString[0] !== inputString[1]) return false

//   return true
// }

// let a = palindromeRearranging('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc');
// console.log(a)
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa