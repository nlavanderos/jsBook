//Classes
function Range(from, to) {
    // let r = Object.create(range.methods);
    this.from = from;
    this.to = to;
    // return r

}

Range.prototype = {

    includes(x){ console.log(this.from)
        return this.from <= x&&x<=this.to},

    *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
// Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to + ")"},

}

let r = new Range(1,3)
console.log(...r)


function Strange() {
    this.static_from=1
    this.static_to=100
    //Strange inherits the Range methods
    Strange.prototype = Range.prototype;
    Range.call(this,this.static_from,this.static_to);
    //USED TO VIEW VALUES FROM PARENT FUNCTION CALLED RANGE AND THE CHILD VALUES(STRANGE)
    // console.log(`from details = `,this);
}

console.log(new Strange() instanceof Range) // => true

let exam=new Strange()
console.log('GETTIN VALUES IN STRANGE FROM RANGE',exam.includes(55))

class XR{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    //STATIC METHOD
    static parse(s) {
        //REGEX
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);

        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`)
        }
        console.log(matches[0])
        return new XR(parseInt(matches[1]), parseInt(matches[2]));
    }
    includes(x){return this.from<=x&&x<=this.to}
}

let exampleClass= new XR(1,4)
console.log('in class ',exampleClass.includes(2))

class Dad extends XR {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

let exCl=new Dad(11,2)
console.log('Extended class',exCl.includes(11))
console.log('PARSING STATIC METHOD',XR.parse('(1...10)'))

//u can define classes and functions insida a variable

class rnd{
    //private field
    #size=12
    //private method
    // static #PRIVATE_STATIC_FIELD
     get size() {return this.#size+1}

    static #methodNO(){
        return 'consumed'
    }

    getPrivateMessage() {
        return rnd.#methodNO()
    }
}
let exee=new rnd
console.log(exee.getPrivateMessage())
console.log(exee.size)


//IDENTIFY IF A METHOD EXIST INSIDE
// If the new String method startsWith() is not already defined...
if (!String.prototype.inside) {
// ...then define it like this using the older indexOf() method.
    String.prototype.inside = function(s) {
        return !!this.indexOf(s);
    };
}

let me='naruto'.inside('r')
console.log(me)


class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

let ezArrEx= new EZArray()
ezArrEx.push(1,2,3,4)
//remove and return the first element
console.log(ezArrEx.shift())
console.log(ezArrEx)

//delegation  technique

class Histogram {
// To initialize, we just create a Map object to delegate to
    constructor() {
        this.map = new Map();
    }

    count(key) {
        return this.map.get(key) || 0;
    }

    // The Set-like method has() returns true if the count is non-zero
    has(key) { return this.count(key) > 0; }

    get size() { return this.map.size; }

    add(key,value) { this.map.set(key, value); }

    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }

    [Symbol.iterator]() { return this.map.keys(); }

    keys() { return this.map.keys(); }
    values() { return this.map.values(); }
    entries() { return this.map.entries(); }

}

let hist= new Histogram()
hist.add('anime','onepiece')
console.log(hist.entries())
console.log(hist.keys(), hist.values())


//ABSTRACT

/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal {
    /**
     @abstract
     */
    constructor() {
        if (this.constructor === Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    say(){
        throw new Error("Abstract method!");
    }
}


/**
 * Cat.
 *
 * @class Cat
 * @extends {Animal}
 */
class Cat extends Animal {
    say (x) {
        console.log(`${x} el gato necesita de: ${this.tools[0]}`);
    }

    constructor(tools) {
        super();
        this.tools=tools
    }
}


let cat = new Cat(['comida','lana','raton de juguete']);
cat.say('miaw');