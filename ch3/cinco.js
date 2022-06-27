//PATTERN MATCHING

let exampleText = "Naruto es una serie genial!!!"


//g is for found globally in a text
let pattern = /(?<excla>!+)$/
let pattern2 = /(?<wordd>n[\w.]{4}o\b)/i

//similar form with regEx
// let pattern = new RegExp("(?<excla>!+)$")

//THE PATTERN IS FOUND IN THE STRING
console.log(pattern.test(exampleText))

//THE PATTERN IS GROUPING WITH A NAME
console.log(pattern.exec(exampleText).groups.excla)


/*EX OF BOOLEAN FALSE
undefined value of variables not initialized
null abscense of value
0,-0
NaN
""
 */

//SYMBOLS
let symName = Symbol("propname")
let dictProps = {}
dictProps[symName]='weight'
console.log(dictProps[symName])
console.log(symName.toString())

let symEx= Symbol.for("juju")
console.log(Symbol.keyFor(symEx))
console.log(dictProps)


//TYPES CONVERTIONS FOR RESERVED WORDS LIKE null,undefined,[],etc..
//NUMBER FUNCTION IS NOT THE SAME AS PARSEINT FUNCTION
console.log(Number([]))

/* EXPLICIT CONVERTIONS
+string , unary operator conver the string into a number OR NaN
!!string,convert to boolean and negates it
string-0,convert to number IF NECESSARY CHANGES THE SIGN
string+ "",convert to string
 */


let numFloat = 17.789
//EXPLICIT CONVERTION TO MAKE NUMBER BECOME A BINARY WITH TOSTRING METHOD
console.log("0b"+numFloat.toString(2))

//SCIENTIFIC DATA

//limit
console.log(numFloat.toFixed(2))
//aprox
console.log(numFloat.toPrecision(2))
//to scientific number
console.log(numFloat.toExponential(1))


//Destructuring assignment

var [x,y] = [12,7]
console.log([x,y] = [x+1,y+2])
var [x,...y]=[y,x,5]
console.log(x,y)
