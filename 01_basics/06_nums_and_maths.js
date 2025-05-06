let score = 400
// console.log(score);
// console.log(typeof score);

const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.3966
const num = otherNumber.toPrecision(2)
// console.log(num);

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-1))
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.min(4,1.9));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min  + 1)) + min);
