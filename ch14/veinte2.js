function html(strings, ...values) {
// Convert each value to a string and escape special HTML characters
let escaped = values.map(v => String(v)
.replace("&", "&amp;")
    .replace("<", "&lt;")
    .replace(">", "&gt;")
    .replace('"', "&quot;")
    .replace("'", "&#39;"));
  // Return the concatenated strings and escaped values
  let result = strings[0];
  for(let i = 0; i < escaped.length; i++) {
    result += escaped[i] + strings[i+1];
  }
  return result; }
let operator = "<";

//EVERY PART OF THE TEXT WILL BE STRINGS CONTENT IN AN ARRAYAND THE OTHER PART IN VALUES $ AS THE SAME

console.log(html`<b>x ${operator} y</b>`)
// => "<b>x &lt; y</b>"
// let kind = "game",name="D&D"
// html`<div class="${kind}">${name}</div>` // =>'<div class="game">D&amp;D</div>'

// 14.6 The Reflect API

//LIKE OBJECT METHODS
// Reflect.apply
// Reflect.defineProperty(o, name, descriptor)
// Reflect.getOwnPropertyDescriptor(o, name)
// Reflect.getPrototypeOf(o)
// Reflect.setPrototypeOf(o, p)
// Reflect.preventExtensions(o)
// Reflect.isExtensible(o)


// This function invokes the constructor c as if the new keyword had been used and passes the
// elements of the array args as arguments. If the optional newTarget argument is specified,
//   it is used as the value of new
// Reflect.construct(c, args, newTarget)

// This function deletes the property with the specified string or symbolic name from the object o,
//   returning true if successful (or if no such property existed)
// and false if the property could not be deleted
// Reflect.deleteProperty(o, name)


// This function returns the value of the property of o with the specified name (a string or symbol).
// If the property is an accessor method with a getter, and if the optional
// receiver argument is specified, then the getter function is called
// as a method of receiver instead of as a method of o.
// Reflect.get(o, name, receiver)


// This function returns true if the object o has a property with the specified name
// Reflect.has(o, name)

// This function returns an array of the names of the properties of the object o
// or throws a TypeError if o is not an object.
// Reflect.ownKeys(o)

// This function sets the property with the specified name of the object o to the specified value. It returns true on
// success and false on failure (which can hap‐ pen if the property is read-only).
// It throws TypeError if o is not an object.
// Reflect.set(o, name, value, receiver)


//PROXIES
let t={x:1,y:2};
let p = new Proxy(t, {});

function accessTheDatabase() { /* implementation omitted */ return 42; }
let {proxy, revoke} = Proxy.revocable(accessTheDatabase, {  });
console.log("Access the database",proxy(),revoke());


//Logginproxy defined in the book references file logginproxy.js

//INVARIANT PROXIES
// let target = Object.preventExtensions({});
// let proxy = new Proxy(target, { isExtensible() { return true; }});
// Reflect.isExtensible(proxy); // !TypeError: invariant violation