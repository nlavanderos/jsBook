//js standard library

//SET
let dm = new Set([2, 3, 1, 4, 2, 5]);
dm.add(6);
dm.delete(1);
console.log(dm);
console.log(dm.has(3));
console.log(dm.size);
//deletes all elements in the set
dm.clear();
console.log(dm.clear);

//MAP

let mapedEx = new Map([["one", 199]]);
console.log(mapedEx);

//SECONF FORM
let mapedEx2 = new Map(Object.entries({ game: "mario bros" }));
//ADD OR UPDATE IN MAP
mapedEx2.set("serie", "vis a vis");
//GET THE VALUE OF THE KEY
console.log(mapedEx2.get("serie"));
console.log(mapedEx2);

//WEAKMAP

//TYPED ARRAYS,  EXAMPLES
console.log(new Uint8Array([1, 2, 3]));
console.log(
  new Float64Array(9)
    .fill(1)
    .map((x) => x * 3)
    .join("")
);
let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white
console.log(white);

//TYPED ARRAYS, ONE EXAMPLE
console.log(new Uint8Array([1, 2, 3]));
// Floats truncated to ints, longer ints truncated
// to 8 bits Uint8Array.of(1.23, 2.99, 45000) // =>
console.log(new Uint8Array([1.23, 2.09, 45000]));

//ADD CONSTANT MEMORY
let buffer = new ArrayBuffer(1024 * 1024);
console.log(buffer.byteLength); // => 1024*1024; one megabyte of memory

// let asints = new Int32Array(buffer);
// console.log(asints)

//arrays instantiation,DATAVIEW of bytes(buffer) AND ENDIANESS
let bytes = new Uint8Array(1024);
let view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);

let viewEndianes = view.getInt32(0);
viewEndianes = view.getInt32(4, false);
viewEndianes = view.getUint32(8, true);

console.log(viewEndianes);
console.log(view.setUint32(8, viewEndianes, false));

//RegEX

//FORMAT ===> /EXPRESSION/FLAGS

// NAMED GROUPING
// (?<name>rule)

/*
FLAGS
g INDICATE THE REGEX IS GLOBAL AND return an array
i case insensitive
m multiline
s like m flag but text that includes newlines
u unicode
y similar to ^ for beggging of string used for one match
*/

/*
ANY FLAG IN CAPS NEGATE EXAMPLE /W negates the below line
\w Any ASCII word character. Equivalent to [a-zA-Z0-9_].
\s Any Unicode whitespace character.
\d Any ASCII digit. Equivalent to [0-9].
\b literal backspace*/
// . MEANING ANYTHING CHAR
let pattern = /(?<seriesNames>[^series:][\w]+)/gi;

console.log("series:naruto , dragon ball z   , one piece ".match(pattern));

/*
REPETITION CHARACTERS
{from,to}
{exactly}
zero or one ocurrence {0,1}=== ?
ONE OR MORE OCURRENCES  {1,} === +
ZERO OR MORE OCURRENCES {0,} === *
    **/

/*ALTERNATION
| MATCH THE REGEX LEFT OR RIGHT EXPRESSION*/

/*ANCHOR CHARS
^MATCH THE BEGGING
$ MATCH THE END
(?=p) A positive lookahead assertion. Require that the following characters match the pattern p, but do not include
those characters in the match.
(?!p) A negative lookahead assertion. Require that the following characters do not match the pattern p.*/

/*STRING METHODS FOR REGEX(PATTERN)

'EXAMPLE'.SEARCH(REGEX) RETURNS THE INDEX IF IT DOESNT MATCH RETURN -1
replace(REGEX,STRINGTOREPLACE) COMBINED WITH A REGEX REPLACE THIS VALUE
'EX'.MATCH(REGEX)
'EX'.MATCHALL(REGEX)
'EX , EX '.split(/\s*,\s*!/)*/

/*REGEX CLASS EXAMPLE
let exactMatch = /JavaScript/;
let caseInsensitive = new RegExp(exactMatch, "i");*/

/*REGEX METHODS
TEST() RETURN BOOLEAN
EXEC() IS FOR MATCHING, USAGE PATTERN.EXEC('TEXT')*/

// URL PARSING

let pattern2 = /(\w+):\/\/([\w.]+)\/([\S]+)/i;
let text = "Visit my blog at http://www.example.com/~setxh";
let match2 = text.match(pattern2);
let fullurl, protocol, host, path;
if (match2 !== null) {
  fullurl = match2[0];
  protocol = match2[1];
  host = match2[2];
  path = match2[3];
}

console.log(fullurl, protocol, host, path);
