//OBJECT METHODS


let point = {
    x:7200,
    y:1000,
    toString:function (){return `${this.x-this.y}`},
    toLocaleString:function (){return `${(this.x-this.y).toLocaleString()}`},
    valueOf:function (){return Math.cos(this.x)},
    toJSON:function (){return this.toString()}
    // toString:()=>{return `${point.x}`}
}

//toString() method
//same output
console.log(String(point))
console.log(point.toString())

//toLocaleString() method
console.log(point.toLocaleString())

//valueOf() method
console.log(Number(point))
console.log(point<1)
console.log(point.valueOf())

//toJSON() method
let exFormatoJson=JSON.stringify([point])
console.log(exFormatoJson)
console.log(JSON.parse(exFormatoJson))
console.log(Object.entries(JSON.parse(exFormatoJson)))


//SHORTHAND PROPERTIES
let x=2,y=3
let obj2={
    x,
    y,
    area:function(){return this.x*this.y},//first form
    area2(g){return this.x*g*2}        //second form shorthand methods
}

// computed propeties
obj2[function computedProperty(){return 'p'+2}()] =121
console.log(obj2)


const extensionSym=Symbol("my extension")
let objetoSymbol= {
    [extensionSym] :{}
}
objetoSymbol[extensionSym].x=777
console.log(objetoSymbol)

//SPREAD OPERATOR TO COPY OBJECTS INTO NEW OBJ
console.log({...objetoSymbol,...obj2})

//SHORTHAND METHODS
console.log(obj2.area(),obj2.area2(2))


//PROPERTY GETTERS AND SETTERS

let exGeAnSe={
    ammo:"9mm",

    get 'mN12@1123'(){return this.ammo},  //munitionName
    set 'mCjdhd#jhh83@$!'(caliber){       //munitionChange
        this.ammo=caliber
    }
}
exGeAnSe['mCjdhd#jhh83@$!']=('10mm')  //munitionChange
console.log(exGeAnSe['mN12@1123'])   //munitionName 