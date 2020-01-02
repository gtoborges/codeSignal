function checkPalindrome(inputString) {

  let stringReverse = inputString.split("").reverse().join("")
  
  if(inputString === stringReverse) return true
  else return false
}