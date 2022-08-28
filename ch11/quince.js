//js standard library

//SET
let dm=new Set([2,3,1,4,2,5])
dm.add(6)
dm.delete(1)
console.log(dm)
console.log(dm.has(3))
console.log(dm.size)
//deletes all elements in the set
dm.clear()
console.log(dm.clear)

//MAP

let mapedEx = new Map([['one',199]]);
console.log(mapedEx)

//SECONF FORM
let mapedEx2 = new Map(Object.entries({'game':'mario bros'}));
//ADD OR UPDATE IN MAP
mapedEx2.set('serie','vis a vis')
//GET THE VALUE OF THE KEY
console.log(mapedEx2.get('serie'))
console.log(mapedEx2)

//WEAKMAP


//TYPED ARRAYS,  EXAMPLES
console.log(new Uint8Array([1,2,3]))
console.log(new Float64Array(9).fill(1).map(x=>x*3).join(''))
let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white
console.log(white)

//TYPED ARRAYS, ONE EXAMPLE
console.log(new Uint8Array([1,2,3]))
// Floats truncated to ints, longer ints truncated
// to 8 bits Uint8Array.of(1.23, 2.99, 45000) // =>
console.log(new Uint8Array([1.23, 2.09, 45000]))

//ADD CONSTANT MEMORY
let buffer = new ArrayBuffer(1024*1024);
console.log(buffer.byteLength )// => 1024*1024; one megabyte of memory

// let asints = new Int32Array(buffer);
// console.log(asints)

//DATAVIEW AND ENDIANESS
let bytes = new Uint8Array(1024);
let view = new DataView(bytes.buffer,
  bytes.byteOffset,
  bytes.byteLength);

let viewEndianes = view.getInt32(0);
viewEndianes = view.getInt32(4, false);
viewEndianes = view.getUint32(8, true);

console.log(viewEndianes)
console.log(view.setUint32(8, viewEndianes, false))


//RegEX

