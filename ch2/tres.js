//UTILS
//CTRL + SHIFT + U AND SELECT TEXT ..CHANGES THE  TEXT CASE(UPPER/LOWER)


//UNICODES
console.log("<<UNICODES>")
let unicode_example = "caf\u00e9"
console.log(unicode_example)

//HEX 0x

//HEX TO INTEGER
console.log('HEX->INT: ',parseInt("0xff",16))
//INTEGER TO HEX
console.log('INT->HEX: ',(255).toString(16),'\n')

//BINARY 0b

//BIN TO INTEGER
console.log('BIN->INT: ',parseInt("10101",2))
//INTEGER TO BIN
console.log('INT->BIN: ',(21).toString(2),'\n')

//OCTAL 0o

//OCT TO INTEGER
console.log('OCT->INT: ',parseInt("377",8))
//INTEGER TO OCT
console.log('INT->OCT: ',(255).toString(8),'\n')


//MATH FUNCTIONS

console.log("<<MATH FUNCTIONS>>")
//UP ROUND
console.log(Math.ceil(3.6))
//DOWN ROUND
console.log(Math.floor(3.6))
//NEAREST ROUND
console.log(Math.round(3.6))

//MATH MIN AND MAX IN SEQUENCE
console.log(Math.min(3.6,2,1.1))

//math constants E AND PI
console.log(Math.E,Math.PI)

//ABS
console.log(Math.abs(-3.6))

//random 0 to 1
console.log(Math.random())

//sqrt for square root and pow for elevate numbers
console.log(Math.pow(3,2))
console.log(Math.sqrt(3))

//LOGARITHMS

//natural logarithm of 10
console.log(Math.log(10))
//base 10 logarithm of 100
console.log(Math.log(100)/Math.LN10)
console.log(Math.log10(100))


//TRIGONOMETRIC sin, cos for example
console.log(Math.sin(25))
console.log(Math.cos(25))

//INFINITY IS A POSITIVE NUMBER TOO BIG TO REPRESENT
//NaN IS not a number value
console.log(Infinity,1/0,0/0)

//SAME
console.log(isNaN(0/0))
console.log(Number.isNaN(0/0))

//REGULAR 0 AND -0 ARE EQUAL BUT INFINITY AND -INFINITY ARE NOT EQUAL
console.log((0/0)===(1/-0))

//problems with equal float numbers

console.log((.1)===(.3-.2))
console.log((.1)===(.2-.1))

//BIG INTS

console.log(1234n)
let strBI = "1"+"0".repeat(100)
console.log(BigInt(strBI))