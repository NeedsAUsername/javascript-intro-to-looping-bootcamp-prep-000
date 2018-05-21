function forloop(array) {
  for (let i = 0; i<25; i+=1) {
    array.push(`I am ${i} strange loop`)
  }
}

array = []

forloop(array)

console.log(array)
