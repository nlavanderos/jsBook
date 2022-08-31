//11.8 The Console API

//plain text of anything

const dummOBJ = { games: ["lol", "valorant"], animes: ["death note", "dbz"] };
console.table(dummOBJ);

//assertion passed print nothing but if it fail print that failed
console.assert(Object.keys(dummOBJ).length > 1);

//Counters
console.count(dummOBJ);
// console.countReset()

/*
console.debug(), console.info(), console.warn(), console.error()
These functions are almost identical to console.log(). In Node, con
sole.error() sends its output to the stderr stream rather than the stdout stream,
    but the other functions are aliases of console.log()*/

/*
console.clear()
This function clears the console when that is possible*/

/*console.trace()
This function logs its arguments like console.log() does, and, in addition, follows
its output with a stack trace. In Node, the output goes to stderr instead of
stdout.*/

/*console.timeLog()
This function takes a string as its first argument. If that string had previously
been passed to console.time(), then it prints that string followed by the elapsed
time since the console.time() call.*/

/*console.timeEnd()
This function takes a single string argument. If that argument had previously
been passed to console.time(),*/

// console.time()

//GROUPS
// console.group(dummOBJ)
// console.groupCollapsed(dummOBJ)
// console.groupEnd()

/*11.8.1 Formatted Output with Console

%s string
%i and %d truncated to number
%f converted to a number
%o and %0 treated as object used for object details
%c In web browsers, the argument is interpreted as a string of CSS styles and used to
style any text that follows*/

//Detailed object
console.log("%o", dummOBJ);

// 11.9 URL APIs

let url = new URL("https://example.com:8000/path/name?q=term#fragment");

/*MOST COMMON METHODS

url.href // => "https://example.com:8000/path/name?q=term#fragment"
url.origin // => "https://example.com:8000"
url.protocol // => "https:"
url.host // => "example.com:8000"
url.hostname // => "example.com"
url.port // => "8000"
url.pathname // => "/path/name"
url.search // => "?q=term"
url.hash // => "#fragment"*/

/*UNCOMMON USE CREDENTIALS IN URL

let url = new URL("ftp://admin:1337!@ftp.example.com/");
url.href // => "ftp://admin:1337!@ftp.example.com/"
url.origin // => "ftp://ftp.example.com"
url.username // => "admin"
url.password // => "1337!"*/

url.searchParams.append("exa", "124");
url.searchParams.append("exa", "23");

//REPLACE ENTIRE EXA VALUE
// url.searchParams.set('exa','25')

//GET THE FIRST EXA PARAM
console.log(url.searchParams.get("exa"));
//BOOLEAN IF EXA EXIST
console.log(url.searchParams.has("exa"));

console.log(url.search);
url.searchParams.delete("q");
console.log(url.search);

//USING URLSEARCHPARAMS CLASS
// let params = new URLSearchParams();
// params.append("q", "term");
// params.toString()
// url.search = params;

//URL LEGACY FUNCTIONS

/*ESCAPE AND UNESCAPE ARE DEPRECATED, ECMASCRIPT INTRODUCE ALTERNATIVES

encodeURI() takes a string as its argument and returns a new string in which
non-ASCII characters plus certain ASCII characters (such as space) are escaped

decodeURI() reverses the process.*/

// 11.10 Timers

// setTimeout(() => { console.log("Ready..."); }, 1000);
let i = 1;
let clock = setInterval(() => {
  console.clear();
  console.log("TIME: ", i++);
  console.log(new Date().toLocaleTimeString());
}, 500);

setTimeout(() => {
  clearInterval(clock);
}, 10000);
