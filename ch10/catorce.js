//MODULES, goal is modular programming

//SIMULATE IMPORT IN A FILE WITHOUT OTHER FILE
const modules = {};
function require(moduleName) { return modules[moduleName]; }

modules ["stax.js"] = (function() {
    const exports = {};
    const sum = (x, y) => x + y;
    exports.mean = function(data){return data.reduce(sum)/data.length;}
//     exports.mean = function(data) { ... };
//     exports.stddev = function(data) { ... };
    return exports;
}());
const stats = require("stax.js");
console.log(stats.mean([1,2,3]))


