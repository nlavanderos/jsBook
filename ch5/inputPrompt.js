//WEB CONSOLE
const input = prompt("Please enter your age:");
alert(`You are ${input} years old`);

//NODEJS CONSOLE
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", (answer)=>{
    console.log(`Oh, so your name is ${answer}`);

});