
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
var start = window.performance.now();

//METODO 1 MAS EFICIENTE
// for(let i=0;i<5;i++) {
//     isPalindrome = (text => {
//         const textLowerCase = text.toLowerCase()
//         let largo = text.length - 1
//         let lim = Math.ceil(largo / 2)
//         for (let i = 0; i <= lim; i++) {
//             if (textLowerCase[i] === textLowerCase[largo]) {
//                 largo -= 1
//                 if (i === lim) {
//                     return true
//                 }
//             } else {
//                 return false
//             }
//         }
//     })


// METODO 2 MAS RAPIDO DE CODEAR PERO MENOS EFICIENTE
// let m =[]
// let word='kayak'
// for(let xa of word ){
//     m.push(xa)
// }
// m.reverse()
// console.log(m.join('')===word)


// console.log(isPalindrome('Kayak'));
// var end = window.performance.now();
// console.log(`Execution time: ${end - start} ms`);
// }



// [
//     { 'id': 1, 'question_name': "What is your name?", 'question_value': "Jack"},
//     { 'id': 2, 'question_name': "What is your hobby?", 'question_value': "Rugby"},
//     { 'id': 3, 'question_name': "What is your name?", 'question_value': "Peter"},
//     { 'id': 4, 'question_name': "What is your hobby?", 'question_value': "Tennis"}
// ]
//
//
// {
//     "What is your name?": [{"id": 1, "value": "Jack" }, {"id": 3, "value": "Peter" }],
//     "What is your hobby?": [{"id": 2, "value": "Rugby"}, {"id": 4, "value": "Tennis"}]
// }

const formatter = (o) => {
    //implement method here
    let objF={}
    o.forEach((item)=>{
        let valuesToObj={id:item.id, value:item.question_value}
        if(item.question_name in objF){
            objF[item.question_name].push(valuesToObj)
        }
        else{
            objF[item.question_name]=[]
            objF[item.question_name].push(valuesToObj)
        }
    })
    return objF
}

const exampleJSON = [
    { 'id': 1, 'question_name': "What is your name?", 'question_value': "Jack"},
    { 'id': 2, 'question_name': "What is your hobby?", 'question_value': "Rugby"},
    { 'id': 3, 'question_name': "What is your name?", 'question_value': "Peter"},
    { 'id': 4, 'question_name': "What is your hobby?", 'question_value': "Tennis"},
    { 'id': 5, 'question_name': "What is your hobby?", 'question_value': "Basquetball"},
    { 'id': 6, 'question_name': "What is your hobby?", 'question_value': "Tennis"},
    { 'id': 7, 'question_name': "What is your hobby?", 'question_value': "Ping Pong"},
    { 'id': 8, 'question_name': "What is your hobby?", 'question_value': "Football"}
];


console.log(formatter(exampleJSON));

