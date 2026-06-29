//arrays
let names = ["Ashish", "Dhiraj", "Amol", "Pwanr"]

console.log(names)
names.push("Sahil")
names.push("Sarita")
console.log(names)

names.pop()
console.log(names)

names.shift()
console.log(names)
names.unshift("Sarvesh")
console.log(names)


let res = names.find((name) => name.startsWith("S"))
console.log(res)
let res2 = names.filter((name) => name.startsWith("S"))
console.log(res2)

let res3 = names.findLast((name) => name.startsWith("S"))
console.log(res3)

let newFriends = ["Bhavana", "Rohit", "Sam"]
let res4 = names.concat(newFriends)

console.log(res4)

console.log(names.includes("Mohit"))

