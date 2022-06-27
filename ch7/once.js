//ARRAYS

//SPREAD
let m=''
new Set([...'rarditz']).forEach(e=>{m+=e})
console.log(m)

// can instance an array with new Array()
//with many args create the array but with one parameter limit the array

//Array.of() for creating one or more values

//Array.from() make a copy of the original array

// CREATE 10 EMPTY VALUES BEFORE THE VALUE 0
a=[]
a["10"] = 0;
console.log(a)
//CREATE PROPERTY X WITH VALUE 2
B={}
B['X']=2
console.log(B)


//C.LENGTH CAN REDEFINE THE SIZE OF THE ARRAY
C=[1,2,3,4]
C.length=3
console.log(C)

//PUSH TO ADD VALUE TO THE LAST POSITION
//POP TO REMOVE THE LAST POSITION

//UNSHIFT TO ADD VALUE IN THE FIRST POSITION OF THE ARRAY
//SHIFT TO REMOVE VALUE AT THE FIRST ELEMENT OF THE ARRAY
C.shift()
C.unshift(101)
console.log(C)

//TO MAKE MULTIDIMENSIONAL ARRAY, THIS CREATE ARRAY=[[,],[,],[,],[,],[,]]
let arrEx=new Array(5)
for(let x=0;x<arrEx.length;x++){
    for(let i=0;i<5;i++){
        arrEx[x]=new Array(2)
    }
}
console.log(arrEx)

//MAPPING IN ARRAYS
let mappingEx=[1,6,8,4].map(e=>e*e)
console.log(mappingEx)


//make range of values
let xa=[...Array(5).keys()]

//filter
console.log(xa.filter((x,i)=>i>2))

//FIND BY INDEX
console.log(xa.findIndex(x => x === 2))

//FIND BY VALUE
console.log(xa.find(x=>x===3))

//EVERY -> ALL VALUES MATCH WITH THE CONDITION IS BOOLEAN TRUE IF NOT FALSE
console.log(mappingEx.every(x=>x>=1))

//SOME IS TRUE IF ONE VALUE MATCH
console.log(mappingEx.some(x=>x%2===0))

//REDUCE EVALUATES AN ARRAY FOR EXAMPLE AN OUTPUT ONE VALUE
console.log(xa.reduce((x,y)=>x+y,0))

let redV=[2,1,4];
// console.log(redV.reduce((acc,val) => Math.pow(val,acc)))
//STEPS
// (1^2)
// (4^1)
console.log(redV.reduceRight((acc,val) => Math.pow(val,acc)))
//1^4
//2^1

//FLAT CANCEL NESTING IN ARRAYS TO MAKE A NEW ONE,for more you can specify in the arg
console.log([1,[2,3]].flat())


//FLATMAP
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
console.log(words) // => ["hello", "world", "the", "definitive", "guide"];

//concat to add values to an array
//xa.concat([1,2,3])


//SLICE RECORTA UNA PARTE DE UN ARREGLO
console.log(xa.slice(0,2))



//SPLICE RECORTA UN NUMERO HACIA DELANTE
console.log(xa.splice(2))

let fillG=new Array(6)
//LLENA EL ARREGLO CON VALORES
fillG.fill(7,4,fillG.length)
console.log(fillG)
