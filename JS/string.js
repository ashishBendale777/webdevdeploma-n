// String is a sequence of char
let nArr = ['T', 'e', 'c', 'h']
console.log(typeof (nArr)) //object
console.log(nArr[2]) //c
console.log(nArr.length) //4
console.log(nArr[nArr.length - 1]) //print last element



let name = "Technoweit Softwares"
console.log(typeof (name))
console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.startsWith('t'))
console.log(name.endsWith('a'))
console.log(name.includes(' '))

console.log(name.charAt(4))
console.log(name.indexOf('r'))
console.log(name.lastIndexOf('e'))

// let words = name.split(" ")
// console.log(words)

console.log(name.replace(" ", "-"))

//////------------
let sentence = "hi guyzz"
let words = sentence.split(" ")
let lastWord = words[words.length - 1]
let capWord = lastWord.replace(lastWord.charAt(0), lastWord.charAt(0).toUpperCase())
console.log(lastWord)
console.log(capWord)

let newSentence = sentence.replace(lastWord, capWord)

console.log(sentence)
console.log(newSentence)