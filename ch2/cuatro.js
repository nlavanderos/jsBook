//Dates and Times
import {times} from "./timeZones.js"
//timestamp number
console.log(Date.now())

//date object
console.log(new Date())
console.log(Date(new Date().toLocaleString()))
console.log(new Date().toLocaleString())
//TIME IN MILISECONDS
console.log(new Date().getTime())
//DATE TO STRING FORMAT
console.log(new Date().toISOString())

//map IS SIMILAR TO forEach
//convert date with local to all timeszones
let date = new Date;
times.map((tiempos)=>{
    let strTime = date.toLocaleString("es-CL", {timeZone: `${tiempos}`});
    console.log(tiempos, strTime);
})

//WORKING WITH STRINGS

let basicThing = "HOLA MUNDO!"

//SUBSTRING AND SLICE ARE SIMILAR
console.log(basicThing.substring(0,4))
console.log(basicThing.slice(-3))

//PUT THE STRING INTO ARRAY
console.log(basicThing.split(" "))

console.log(basicThing.indexOf("O"))
//POSITION OF FIRST L STARTING AT INDEX 2 OR AFTER, IF NOT EXIST THE VALUE IS -1
console.log(basicThing.indexOf("L",2))

console.log(basicThing.lastIndexOf("O"))

//BOOLEAN SEARCHING
console.log(basicThing.startsWith("HO"))
console.log(basicThing.endsWith("O!"))
//INCLUDES SUBSTRING LA
console.log(basicThing.includes("LA"))

//MODIFIED VERSION OF A STRING
console.log(basicThing.replace("HOLA","WENA"))
console.log(basicThing.toLowerCase().toUpperCase())


//UNICODE NORMALIZATION ES6
console.log(basicThing.normalize())
// UNICODE NORMALIZATION NFKC,NFKD,NFD
console.log(basicThing.normalize("NFD"))

//INSPECTING INDIVIDUAL 16-BIT CHARS OF STRING

console.log(basicThing.charAt(0))

//CHARCODE OF THE CHAR
console.log(basicThing.charCodeAt(0))
console.log(basicThing.codePointAt(0))

//PADS IN ES2017
let formatPadding=basicThing.length+5
console.log(basicThing.padStart(formatPadding,"*").padEnd(formatPadding+5,"*"))

//DELETE SPACES

//FOR SINGLE WORD EXECUTE FUNCTIONS

let trimFunctions = ['.trimEnd()','.trim()','.trimStart()']
trimFunctions.map((fun)=>{
    let exampleTrim="  Goku  "
    console.log(eval("exampleTrim"+fun))
})

//FOR A LIST OF WORDS THIS WORK

// let trimFunctions = ['.trimEnd()','.trim()','.trimStart()']
// let palabras = [' GOKU  ','VEGETA  ','   Gohan',' Piccolo ']
//
// trimFunctions.map((fun)=>{
//     palabras.forEach((word)=>{
//             let exampleTrim=word
//             console.log(eval("exampleTrim"+fun))
//         }
//     )
// })

//CONCAT AND REPEAT

console.log(basicThing.concat("$$$$"))
console.log(basicThing+"@".repeat(5))


//TEMPLATE LITERALS (`EXAMPLE`)
//SKIP THE FIRST LINE THE CHAR \
let errorMessage=`\
\u2718
\u2718`;
console.log(errorMessage)
console.log(String.raw`\n`.length)