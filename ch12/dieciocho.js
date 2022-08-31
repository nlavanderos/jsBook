// Iterators

let list = [1, 2, 3, 4];
let iter = list[Symbol.iterator]();

for (let resultado = iter.next(); !resultado.done; resultado = iter.next()) {
  console.log(resultado.value);
}

/*
 * A Range object represents a range of numbers {x: from <= x <= to}
 * Range defines a has() method for testing whether a given number is a member
 * of the range. Range is iterable and iterates all integers within the range.
 */
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  // Make a Range act like a Set of numbers
  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }
  // Return string representation of the range using set notation
  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
  }
  // Make a Range iterable by returning an iterator object.
  // Note that the name of this method is a special symbol, not a string.
  [Symbol.iterator]() {
    // Each iterator instance must iterate the range independently of
    // others. So we need a state variable to track our location in the
    // iteration. We start at the first integer >= from.
    let next = Math.ceil(this.from); // This is the next value we return
    let last = this.to; // We won't return anything > this
    return {
      // This is the iterator object
      // This next() method is what makes this an iterator object.
      // It must return an iterator result object.
      next() {
        return next <= last // If we haven't returned last value yet
          ? { value: next++ } // return next value and increment it
          : { done: true }; // otherwise indicate that we're done.
      },
      // As a convenience, we make the iterator itself iterable.
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}
for (let x of new Range(6, 10)) console.log(x); // Logs numbers 1 to 10

console.log([...new Range(-2, 2)]);
console.log(new Range(-2, 2).has(1));
console.log(new Range(-2, 2).toString());

// 12.3 Generators

let o = {
  b: 1,
  n: 2,
  z: 3,
  // A generator that yields each of the keys of this object
  *g() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  },
};

//Print keys without the key of function g
console.log([...o.g()].slice(0, Object.keys(o).length - 1));

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for iterable object
  while (n-- > 0) {
    // Loop n times:
    let next = it.next(); // Get the next item from the iterator.
    if (next.done) return; // If there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}

console.log([...take(5, fibonacciSequence())]);

// Advanced Generator Features

function* smallNumbers() {
  console.log("next() invoked the first time; argument discarded");
  let y1 = yield 3; // y1 == "b"
  console.log("next() invoked a second time with argument", y1);
  let y2 = yield 5; // y2 == "c"
  console.log("next() invoked a third time with argument", y2);
  let y3 = yield 1; // y3 == "d"
  console.log("next() invoked a fourth time with argument", y3);
  return 8;
}

let g = smallNumbers();
console.log("generator created; no code runs yet");
let n1 = g.next(); // n1.value == 1
console.log("generator yielded", n1.value);
let n2 = g.next("b"); // n2.value == 2
console.log("generator yielded", n2.value);
let n3 = g.next("c"); // n3.value == 3
console.log("generator yielded", n3.value);
let n4 = g.next("d"); // n4 == { value: 4, done: true }
console.log("generator returned", n4.value);
