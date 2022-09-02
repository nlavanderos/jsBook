



let o = {}; // Start with no properties at all
// Add a non-enumerable data property x with value 1.
Object.defineProperty(o, "x", {
  value: 1, writable: true, enumerable: false, configurable: true
})
console.log(Object.getOwnPropertyDescriptors(o))
console.log(Object.getOwnPropertyDescriptor(o,"x"))


Object.defineProperty(Object, "assignDescriptors", { // Match the attributes of Object.assign() writable: true,
  enumerable: false,
  configurable: true,
// The function that is the value of the assignDescriptors property.
value: function(target, ...sources) {
  for(let source of sources) {
    for (let name of Object.getOwnPropertyNames(source)) {
      let desc = Object.getOwnPropertyDescriptor(source, name);
      Object.defineProperty(target, name, desc);
    }
    for(let symbol of Object.getOwnPropertySymbols(source)) {
      let desc = Object.getOwnPropertyDescriptor(source, symbol); Object.defineProperty(target, symbol, desc);
    }
  }
return target; }
});
let d = {c: 1, get count() {return this.c++;}}; // Define object with getter
let p = Object.assign({}, d); // Copy the property values
console.log(p.count);
let copiado=Object.assignDescriptors({},d)
console.log(copiado.count);
console.log(copiado.count);


//SEAL PREVENT DELETE AND ADD PROPERTIES
//FREEZE PREVENT MODIFYING THE PROPERTIES
let g = Object.seal(Object.create(Object.freeze({x: 1}),
  {y: {value: 2, writable: true}}));

console.log(Object.getPrototypeOf([]))
let p1={x: 1}
let gtp = Object.create(p1);
console.log(p1.isPrototypeOf(gtp))


console.log(Object.prototype.isPrototypeOf(p))

let oo={x:1};
let pp={y:2};
Object.setPrototypeOf(oo,pp); // Set the prototype of o to p
console.log(pp.isPrototypeOf(pp))


function classof(o){
  return Object.prototype.toString.call(o).slice(8,-1);
}

console.log(classof([]))


//CUSTOM TYPE

// Define an object as a "type" we can use with instanceof
// let uint8 = { [Symbol.hasInstance](x) {
//     return Number.isInteger(x) && x >= 0 && x <= 255; }
// };

// 128 instanceof uint8 // => true


// IN CLASSES THE TYPE OF CLASS
// class Range {
//   get [Symbol.toStringTag]() { return "Range"; } // the rest of this class is omitted here
// }
// let r = new Range(1, 10); Object.prototype.toString.call(r) // => "[object Range]" classof(r)



//species in symbols functions to overwrite built ins
// class MyArray extends Array {
//   // Overwrite species to the parent Array constructor
//   static get [Symbol.species]() { return Array; }
// }
// const a = new MyArray(1, 2, 3);
// const mapped = a.map((x) => x * x);
//
// console.log(mapped instanceof MyArray); // false
// console.log(mapped instanceof Array);   // true


//REDIFINE PRIMITIVE
// const foo = {}
//
// console.log(String(foo))
//
// foo[Symbol.toPrimitive] = () => {
//   return 'Foo is a nice lad'
// }
//
// console.log(String(foo))



//REGEX WITH SYMBOLS AND CLASS REPLACEMENT


// class Glob { constructor(glob) {
//   this.glob = glob;
// // We implement glob matching using RegExp internally.
// // ? matches any one character except /, and * matches zero or more // of those characters. We use capturing groups around each.
//   let regexpText = glob.replace("?", "([^/])").replace("*", "([^/]*)");
// // We use the u flag to get Unicode-aware matching.
// // Globs are intended to match entire strings, so we use the ^ and $ // anchors and do not implement search() or matchAll() since they // are not useful with patterns like this.
//   this.regexp = new RegExp(`^${regexpText}$`, "u");
// }
//   toString() { return this.glob; }
//   [Symbol.search](s) { return s.search(this.regexp); } [Symbol.match](s) { return s.match(this.regexp); } [Symbol.replace](s, replacement) {
//     return s.replace(this.regexp, replacement); }
// }
// let pattern = new Glob("docs/*.txt"); "docs/js.txt".search(pattern) // => 0: matches at character 0 "docs/js.htm".search(pattern) // => -1: does not match
// let match = "docs/js.txt".match(pattern);
// match[0] // => "docs/js.txt"
// match[1] // => "js"
// match.index // => 0
// "docs/js.txt".replace(pattern, "web/$1.htm") // => "web/js.htm"


