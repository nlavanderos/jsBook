//Expression and operators


// void return an undefined value
// ** exponential


//VOID(0) EXECUTES THE JSCODE INSTEAD OF REFRESH THE PAGE OR REDIRECT AT OPEN A LINK

// <html>
// <body>
// <a href="javascript:void(0);alert('¡Hola! Estoy aquí')">Aceptar</a>
// </body>
// </html>


var hello = () =>{
    console.log("hello")
    void(0)
}

console.log(hello())
console.log(2**2)

// delete remove a property
// ?? first defined , left operand is not null and not undefined
// :? the conditional operator
// in  property name exist

const objTest ={
    tipo:"casa",
    deco:"hogar"
}

delete objTest.tipo
console.log(objTest)
console.log(objTest.tipo??objTest.deco)
console.log(objTest?200:400)
console.log("deco" in objTest)


// EQUALITY
// === strict equality (value and type equal) and == equality(value equal)
// != not same value and type
// !== not strict equal (same value but not same type)

console.log("not strict equal ",11!=="11")

// BITWISE OPERATORS
// ~ invert bits(reverse all bits)
// | or exp is a sum
// ^ xor exp
// & and is multiplication
// << shift left and >> shift right with sign extension
// >>> shift right with zero extension

// let valueBin=0b101.toString(10)
let valueBin=parseInt('101',2)

console.log(valueBin)
// BIN TO INTEGER WITH SHIFT TO THE RIGHT(REDUCE THE VALUE) THE NUMBER (1) REMOVE BIN(1|0) FROM THE RIGHT
console.log(valueBin>>1)
// 0B10

// BIN TO INTEGER WITH SHIFT TO THE LEFT (INCREMENT THE VALUE) THE NUMBER(2) ADD ZEROS TO THE RIGHT
console.log(valueBin<<2)
// 0B10100

console.log(~2)
console.log(12|1)
console.log(0b111&0b101)
console.log(12^1)


//LOGIC OPERATORS
//!! cast to boolean
// && AND
// || OR
// ! NOT

//if has a value always true
console.log("cast to boolean",!!12)

// between boolean values both are equal true otherwise false
console.log("logic trace :",true&&true)
//between numbers values the right number are the result
console.log("logic trace :",110&&12)

//negates
console.log(!true)

//or grab the left number
console.log(1001||12)
//between boolean grab the true always
console.log(false||true)


// instanceof  boolean, check the instance match
// typeof the type of the variable
let pruebaDate=new Date()
console.log(pruebaDate instanceof Date)
console.log(typeof(pruebaDate))

