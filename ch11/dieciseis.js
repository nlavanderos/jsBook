//DATES AND TIMES

let cDate = new Date()
console.log(cDate)
//PARAMS OF DATE YEAR,MONTH O TO 11 JANUARY TO DECEMBER,DAY,HOUR,MM,SS,MS

let centenario=new Date(Date.UTC(2022,0,2))
console.log(centenario)

//add 1 year to cdate
console.log(cDate.setFullYear(cDate.getFullYear()+1))

//add 10 seconds to cdate
cDate.setTime(cDate.getTime() + 10000);


//set month and weeks

// let d = new Date();
// d.setMonth(d.getMonth() + 3, d.getDate() + 14);


let d = new Date(2020, 0, 1, 17, 10, 30);
// 5:10:30pm on New Year's Day 2020
// d.toString() // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
// d.toUTCString()  => "Thu, 02 Jan 2020 01:10:30 GMT"
// d.toLocaleDateString()=> "1/1/2020": 'en-US locale
// d.toLocaleTimeString() // => "5:10:30 PM": 'en-US' locale
// d.toISOString() => "2020-01-02T01:10:30.000Z"


//ERROR CLASSES

class HTTPError extends Error {
  constructor(status, msg, url) {
    super(`${status} - ${msg} - ${url}`);
    this.status = status;
    this.msg = msg;
    this.url = url;
  }
  get name() { return "HTTPError";}

}

console.log(new HTTPError(400,'ERR IS FOUND ON ','WWW.ERROR.CL'))


// JSON Serialization and Parsing

// let o = {s: "", n: 0, a: [true, false, null]};
// let s = JSON.stringify(o);
// let copy = JSON.parse(s);

// Make a deep copy of any serializable object or array

//function deepcopy(o) {
// return JSON.parse(JSON.stringify(o));
// }

// CUSTOM JSON PARSER

// let data = JSON.parse(text, function(key, value) {
// Remove any values whose property name begins with an underscore if (key[0] === "_") return undefined;
  // If the value is a string in ISO 8601 date format convert it to a Date.
  // if (typeof value === "string" && /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)) { return new Date(value);
  // }
  // Otherwise, return the value unchanged
  // return value; });

// Specify what fields to serialize, and what order to serialize them in
// let text = JSON.stringify(address, ["city","state","country"]);



// 11.7 The Internationalization API

//FORMATING NUMBERS

//PROPERTIES
//style Specifies the kind of number formatting that is required. The default is "decimal".
// Specify "percent" to format a number as a percentage or specify "currency

//currency If style is "currency", then this property is required to specify the three-letter ISO currency code
// currencyDisplay style is "currency", then this property specifies how the currency is displayed.
// useGrouping Set this property to false if you do not want numbers to have thousands separa‐ tors
// minimumIntegerDigits The minimum number of digits to use to display the integer part of the number.

// minimumFractionDigits, maximumFractionDigits
// These two properties control the formatting of the fractional part of the number.
//   If a number has fewer fractional digits than the minimum,
//   it will be padded with zeros on the right. If it has more than the maximum, then the fractional part will be rounded.


// minimumSignificantDigits, maximumSignificantDigits
// These properties control the number of significant digits used when formatting a number,
//   making them suitable when formatting scientific data

//CURRENCY_FORMAT FOR CLP
let pesos = Intl.NumberFormat("es-CL", {style: "currency", currency: "CLP"});
console.log(pesos.format(10000))


//float points to percentages
let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
}).format;

console.log(data.map(formatData))



// 11.7.2 Formatting Dates and Times  PAG 312