function isIPv4Address(inputString) {

  let ipAdresses = inputString.split('.')
  if(ipAdresses.length !== 4) return false

  let onlyNumbers = /^[0-9]+$/

  for(let i of ipAdresses){
    if(i.length > 3 || i.length < 1) return false
    if(Number(i) > 255) return false
    if(!i.match(onlyNumbers)) return false
  }

  return true
}

let a = isIPv4Address('.255.255.255')
console.log(a)