//DATA TYPES SUMMARY
/*
Variable types

Keyword	Variable    Scope	    Reassign?	Redeclare?	Hoist?
var	                Function	    Yes	        Yes	        Yes
const	            Block	        No	        No	        No
let	                Block	        Yes		    No	        No

HINT: how hoist work...u need to declare a variable without value and print AFTER it u add a value to this variable.

Content of variables

1 0.1 numbers can be interger or real
"hola mundo" string of text in double quotes
'hunterxhunter' delimited string in single quotes
true false boolean values
null undefined means special values null for no value and undefined is like a null but no data type associated
*/

//HOIST

var std;
console.log(std);
std='sdas'

//Objects

let book ={
    topic: 'JavaScript',
    edition: 7,
    credits:{author:'Jeff Williams'}
};
console.log(book);

//Conditionally access properties ?, ES2020 CHAINING OPTIONAL(?) FOR ACCESS AND FUNCTIONS
console.log(book.credits?.author);

//Arrays

let container = [1,2,4,56,221];
container[1]=215;
console.log(container[container.length-1]);
console.log(container[1]);

//Arrays operations
let a=[];
a.push(1,2,3);
a.reverse();
console.log(a);

//Arrays/Objects Combinations

let puntos = [
    {x:2, y:1},
    {x:3, y:4}
];

console.log(puntos[0]);

let duos = {
    head:[[1,2],[3,4]],
    head2:[[4,2],[6,4]]
};
console.log(duos['head']);

puntos.dist = function(){
    let p1 = this[0];
    let p2 = this[1];
    let op1=p2.x-p1.x;
    let op2=p2.y-p1.y;
    return Math.sqrt(Math.pow(op1,2)+Math.pow(op2,2));
}
console.log(puntos.dist());

//FOR LOOP

//sum all elements, x value of each element in array
let slots=[1,2,3,4];
let sum=0
for(let x of slots){
    sum+=x
}
console.log(sum)

//print each element, x as index of each element of array
let slots2=[1,2,3,4];
for(let x in slots2){
    console.log(slots2[x])
}

//FOR LIKE C STYLE

for(let x=2;x<6;x++){
    console.log(x)
}

//WHILE
// WHILE(CONDITION){}

//IF/ELSE SAME AS THE OTHERS LENGUAGES
// IF(CONDITION){}ELSE{}

class Punto{

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distancia(){
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
}

let puntoEX = new Punto(5,1).distancia()
console.log(puntoEX)
