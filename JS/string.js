// String is a sequence of char
let nArr = ['T','e','c','h']
console.log(typeof(nArr)) //object
console.log(nArr[2]) //c
console.log(nArr.length) //4
console.log(nArr[nArr.length-1]) //print last element



let name = "Technoweit Softwares"
console.log(typeof(name))
console.log(name.toUpperCase()) 
console.log(name.toLpwerCase()) 

console.log(name.startWith('t'))
console.log(name.endsWith('a'))
console.log(name.includes(' '))

console.log(name.chatAt(4))
console.log(name.indexOf('r'))
console.log(name.lastIndexOf('e'))

let words = name.split(" ")
console.log(words)

console.log(name.replace(" ","-"))

