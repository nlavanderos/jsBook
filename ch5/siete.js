// Statements

// CONDITIONALS STATEMENTS

// if()/else and if()/else if()/else

//SWITCH

let indexSwitch;
switch (indexSwitch = 3) {
    case 1:
        console.log("primero en llegar");
        break
    case 2:
        console.log("llegaste 2do")
        break
    default:
        console.log("gracias por participar")
        break
}

//LOOPS

// WHILE
let contador=1
while(contador<indexSwitch+1){
    console.log(contador)
    contador++
}

contador=0
// DO/WHILE
do {
    console.log(contador)
    contador++
}while (contador!=2);


//FOR

// ONE LINE FOR REASSIGNAMENT
let a=[7,4,6,4];
for(let i=0;i<a.length;a[i++]+=1);
console.log(a)

//FOR/OF WITH OBJECTS

let frecuencia={}
frecuencia.contador=0
for (let letter of 'zeus'){

    if (frecuencia[letter]){
        frecuencia[letter]++
        frecuencia.contador++

    }
    else{

        frecuencia[letter]=1
        frecuencia['contador']+=1
    }
}
console.log(frecuencia)

//KEYS AND VALUES
var formacionFrec = ''
// REPLACE KEYS FOR VALUES TO GET VALUES...
for (let propName of Object.keys(frecuencia)){
    if(propName==='contador'){
        continue
    }
    else{formacionFrec +=propName}
}
console.log(formacionFrec)


//ENTRIES
var formacionFrec = ''
for (let [propName,val] of Object.entries(frecuencia)){
// for (propName of Object.keys(frecuencia)){
    if(propName==='contador'){
        continue
    }
    else{formacionFrec +=propName+val}
}
console.log(formacionFrec)


//SET
let series = "power rangers are lolol lo ro lo lo"
let seriesSet = new Set(series.split(" "))
let uniqSeries=[]
for (let unq of seriesSet){
    uniqSeries.push(unq)

}
console.log(uniqSeries)

//MAP
let mapa = new Map([[110,{'dos':'eme'}]])
for (let [x,v] of mapa){
    console.log(x,v)
}

//FOR IN

// values of properties

// PROPERTY NAME
let pruebaT=[],j=0;
for(pruebaT[j++] in frecuencia){
    console.log(pruebaT)
}
// VALUES, x is the property
for(let x in frecuencia){
    console.log(frecuencia[x])
}

