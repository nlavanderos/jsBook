// OBJECTS

//OBJECT EXAMPLE
const objBase={
    series:['naruto','one piece', 'dbz'],
    isHuman:true,
    printIntroduction: function() {
        console.log(`Series list is ${this.series}. Am I human? ${this.isHuman}`);
    }}

//CREATE A NEW OBJECT WITH A BASE...REPLACE THE VALUES FROM PROPERTIES AND THE FUNCTIONS PRINTS BASE PROPERTIES
let createObject=Object.create(objBase)
createObject.isHuman=false
console.log(createObject)
createObject.printIntroduction()

//inherits properties
let createObject2=Object.create({series:'Fairy tail'})
createObject2['meme']=12
console.log(createObject2.series)

//no inherits properties
let createObject3=Object.create(null)

//ordinary empty object
let createObject4=Object.create(Object.prototype)

//CREATING OBJECTS

// new Object() ->    same as {}
// new Array()  ->    same as []
// new Date()   ->    rep the current time
// new Map()    ->    map object for key/value mapping


//property access errors

//Testing properties
console.log(createObject2.hasOwnProperty("series"), createObject2.hasOwnProperty("meme") )
console.log(createObject2.propertyIsEnumerable('meme'))


//get all property names
console.log(Object.keys(createObject2))

//get all property EXCEPT SYMBOLS
console.log(Object.getOwnPropertyNames(createObject2))

//GET ALL KEYS INCLUDING SYMBOLS
// Reflect.ownKeys()


//EXTENDING OBJECTS
let sourceExtend={audience:'mature'}
for(let key of Object.keys(sourceExtend)){
    objBase[key] = sourceExtend[key]
}
console.log(objBase)



//overwrite existing values with the same name
const source = { b: 4, isHuman: false };
const baseChanged = Object.assign(objBase, source);
console.log(baseChanged)


//SERIALIZING OBJECTS

//json with quotes
let objetoSerializado = JSON.stringify(baseChanged)
//json without quotes
console.log(JSON.parse(objetoSerializado))

