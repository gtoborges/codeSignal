function reverseInParentheses(inputString) {
  let indexOpenParenthesis = -1
  let indexCloseParenthesis = -1
  
  inputString = inputString.split("")
  for(let i=0; i<inputString.length; i++){
    if(inputString[i] == '(') indexOpenParenthesis = i
    if(inputString[i] == ')') {
      indexCloseParenthesis = i
      break;
    }
  }

  if(indexOpenParenthesis == -1 && indexCloseParenthesis == -1) {
    let string = inputString.join("").replace(' ', "")
    return string
  }

  inputString.splice(indexOpenParenthesis, 1)
  inputString.splice(indexCloseParenthesis-1, 1)
  indexCloseParenthesis = indexCloseParenthesis - 2
  while(indexOpenParenthesis<indexCloseParenthesis){
    let aux = inputString[indexCloseParenthesis]
    inputString[indexCloseParenthesis] = inputString[indexOpenParenthesis]
    inputString[indexOpenParenthesis] = aux;
    indexCloseParenthesis--
    indexOpenParenthesis++
  }

  return reverseInParentheses(inputString.join(""))
}