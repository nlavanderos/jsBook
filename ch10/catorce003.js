//ES6 EXPORTS
//FOR ONE OR MORE IMPORTS USE BELOW
// import {Circle} from './circleES6.js'

//RENAMED BRACKET IMPORT
// import {Circle as CI} from './circleES6.js'

//FOR IMPORT ALL AS STATS USE BELOW
import * as stats from './circleES6.js'

console.log(new stats.Circle(12).area())
console.log(stats.default)


//JS MODULES ON WEB
// <script type="module">import "./main.js";</script>

// DYNAMIC IMPORT ES6
async function analyzeData() {
    let statsx = await import("./circleES6.js");
    return {
        PI: statsx.PI,
    };
}

console.log(analyzeData().then((res)=>console.log(res)))


//Within an ES6 module
//import.meta.url is to be able to refer to images, data files,
// or other resources that are stored in the same directory as (or relative to) the module.
function localStringsURL(locale) {
    return new URL(`books/${locale}.json`, import.meta.url);
}

console.log(localStringsURL('mangas'))