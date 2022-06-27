//Functions

//NORMAL
function adding(x){
    return x + 1;
}
//ARROW FUNCTION  ES6
const square=x=>x*x

console.log(adding(12))
console.log(square(adding(2)))

//ORDER WAY
function squareFunction(a){
    return a*a;
}
const numbers = [1, 5, 10, 15];
var squares =numbers.map(function ( num){
    return squareFunction(num)
})
console.log(squares)

//FAST WAY
var squares =numbers.map((num)=>{return squareFunction(num)})
console.log(squares)

//blue hearth
console.log("\ud83d\udc99")

//ESCAPE SEQUENCES

/*
 \0  NULL CHARACTER
 \b backspace
 \t horizontal tab
 \v vertical tab
 \n newline
 \f form feed
 \\ backslash
 \' apostrophe
 \" double quote
 \r carriage return
 */
console.log("fsdasd \r xsdasds")

//working with strings