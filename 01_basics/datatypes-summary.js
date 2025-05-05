// Primitive

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
// Refrence (Non- Primitive)

//Array, objects, Functions



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non=Primitive)

let myYoutubename = "avnidotcom"
let anothername = myYoutubename
anothername = "codecasdemia"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


