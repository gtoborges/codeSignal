function boxBlur(image) {

  let iMinRef = 0
  let iMaxRef = 2
  let jMinRef = 0
  let jMaxRef = 2

  let newImage = []
  let newImageHorizontalLength = image[0].length-2
  let newImageVerticalLength = image.length-2

  console.log(newImageHorizontalLength, newImageVerticalLength)
  
  for(let i=0; i<image.length-2; i++){
    console.log('pushing new array into matrix')
    newImage.push([])
  }
  console.log(newImage)
  do {
    let sum = 0;
    for(let i=0; i<image.length; i++){
      for(let j=0; j<image[i].length; j++){
        if(i>=iMinRef && i<=iMaxRef && j>=jMinRef && j<=jMaxRef) {
          sum += image[i][j]
        }
      }
    }
    let number = parseInt(sum/9)
    newImage[iMinRef][jMinRef] = number
    console.log(number, `[${jMinRef}][${iMinRef}]`)
    console.log('-----------------------')
    console.log(newImage)
    console.log('-----------------------')
    
    iMinRef++
    iMaxRef++
    if(iMinRef >= newImage[jMinRef].length){
      console.log('\n')
      iMinRef = 0
      iMaxRef = 2
      jMinRef++
      jMaxRef++
    }
    console.log('newImage.length: ',  newImage.length, '| newImage[lastLine]: ', newImage[newImage.length-1].length)
    console.log('vertical: ', newImageVerticalLength, ' | horizontal: ', newImageHorizontalLength-1)
    
  } while(newImage.length <= newImageVerticalLength || newImage[newImage.length-1].length <= newImageHorizontalLength)

  return newImage
}

let a = [[36,0,18,9,9,45,27], 
         [27,0,254,9,0,63,90], 
         [81,255,72,45,18,27,0], 
         [0,0,9,81,27,18,45], 
         [45,45,227,227,90,81,72], 
         [45,18,9,255,9,18,45], 
         [27,81,36,127,255,72,81]]

let b = [[36,0,18,9], 
         [27,54,9,0], 
         [81,63,72,45]]

boxBlur(a)
