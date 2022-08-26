
//NODEJS IMPORT FROM A FILE
const xd = require('./statsNode.js')
console.log(xd.mean([1,5]))

const { stddev } = require('./statsNode.js');

console.log(stddev([1,23,3]))


//dynamic import NODEJS, without es6 work for node only /commonjs

// import("./statsNode.js").then(stats => {
//     let average = stats.mean([1,23,3]);
//     console.log(average)
// })
