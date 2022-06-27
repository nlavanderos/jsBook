//JUMPS

//LABELED STATEMENT

//CONTINUE

testD : for(let x =3;x<5;x++){
    console.log(x)
    testF : for(let x =0;x<1;x++){
        console.log(x)
        continue testD

    }
}

//BREAK

testA : for(let x =3;x<6;x++) {
    testB : for (let j = 0; j < 1; j++) {
        if (x === 4) {
            console.log(x,j)
            break testA
        }

    }
}

//YIELD

function* range(from, to){
    for (let j = from; j < to; j++) {
    yield j
    }
}


//to iterate in console log with next and check if this is finish with done(boolean)
for(let x of range(2,4)) {
    console.log(x)
}

//THROW

var fP=(a) => {

    if(a<0){
    throw new Error("INVALID NUMBER PUT A POSTIVE NUMBER")
    }
    else{
        console.log(a)
        return a
    }
}

//HANDLES EXCEPTIONS

//TRY/CATCH/FINALLY

try{
    var val=fP(-21)
}
catch (e){
    e=1
    console.log('negatives always be ->',e)
    val=e
}
finally {
    console.log('el numero fue correctamente procesado',val)
}

//WITH ,DEBUGGER AND USE STRICT

//with is forbidden in strict mode is considered deprecated in non strict
const r = 10;
with (Math) {
    let a = PI * r * r;
    let x = r * cos(PI);
    let y = r * sin(PI / 2);
    console.log(a,x,y)
}
//WITHOUT WITH STATEMENT
const{PI,cos,sin}=Math
console.log(PI)


//DEBUGGER

function testFR(o){
    if(o==undefined) debugger;
    console.log('asasas')
}

testFR()


//USE STRICT is used like "use strict" at the first line
//use strict have a lot of rules 123 of the js book


//CLASS

class Circulo{
    constructor(radio) {
        this.r=radio
    }
    area(){return PI * this.r * this.r}
}

console.log(new Circulo(5).area())


// IMPORT AND EXPORT

// IMPORT EXAMPLE
// import Circle from './ocho.js'

// EXPORT EXAMPLE
export {r,val}