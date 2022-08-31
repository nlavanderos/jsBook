//DATES AND TIMES

let cDate = new Date();
console.log(cDate);
//PARAMS OF DATE YEAR,MONTH O TO 11 JANUARY TO DECEMBER,DAY,HOUR,MM,SS,MS

let centenario = new Date(Date.UTC(2022, 0, 2));
console.log(centenario);

//add 1 year to cdate
console.log(cDate.setFullYear(cDate.getFullYear() + 1));

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
  get name() {
    return "HTTPError";
  }
}

console.log(new HTTPError(400, "ERR IS FOUND ON ", "WWW.ERROR.CL"));

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
let pesos = Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" });
console.log(pesos.format(10000));

//float points to percentages
let data = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;

console.log(data.map(formatData));
console.log(formatData(data[0]));

// 11.7.2 Formatting Dates and Times

/*year
Use "numeric" for a full, four-digit year or "2-digit" for a two-digit
abbreviation.*/

/*month
Use "numeric" for a possibly short number like “1”, or "2-digit" for a numeric
representation that always has two digits, like “01”. Use "long" for a full name
like “January”, "short" for an abbreviated name like “Jan”, and "narrow" for a
    highly abbreviated name like “J” that is not guaranteed to be unique.*/

/*day
Use "numeric" for a one- or two-digit number or "2-digit" for a two-digit
number for the day-of-month.*/

/*weekday
Use "long" for a full name like “Monday”, "short" for an abbreviated name like
“Mon”, and "narrow" for a highly abbreviated name like “M” that is not guaranteed
to be unique.*/

/*era
This property specifies whether a date should be formatted with an era, such as
CE or BCE. This may be useful if you are formatting dates from very long ago or
if you are using a Japanese calendar. Legal values are "long", "short", and
"narrow".*/

/*hour,minute,second
timeZone This property specifies the desired time zone for which the date should be formatted.
timeZoneName This property specifies how the time zone should be displayed in a formatted
date or time.
hour12  This boolean property specifies whether or not to use 12-hour time*/

/*hourCycle
This property allows you to specify whether midnight is written as 0 hours, 12
hours, or 24 hours. The default is locale dependent, but you can override the
default with this property. Note that hour12 takes precedence over this property.
    Use the value "h11" to specify that midnight is 0 and the hour before midnight is
11pm. Use "h12" to specify that midnight is 12. Use "h23" to specify that midnight
is 0 and the hour before midnight is 23. And use "h24" to specify that midnight
is 24.*/

// EXAMPLES

let dataDT = new Date("2020-01-02T15:24:15Z");
let optsDT = { year: "numeric", era: "short" };
console.log(Intl.DateTimeFormat("en", optsDT).format(dataDT));

//chinese,iso8601,buddhist,indian , etc for locales calendars
console.log(Intl.DateTimeFormat("en-u-ca-japanese", optsDT).format(dataDT));
let optsDT2 = {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/Santiago",
};
console.log(Intl.DateTimeFormat("es-CL", optsDT2).format(dataDT));

// const HoySantiago = dataDT.toLocaleString("es-CL", {timeZone: "America/Santiago"});
// console.log(HoySantiago)

//11.7.3 Comparing Strings

/*sensitivity
accent considers accents in comparisons but ignores case
The value "base" causes comparisons that ignore case
and accents, considering only the base letter for each character
"variant" performs strict comparisons that
consider both case and accents.*/

/*
usage
This property specifies how the collator object is to be used. The default value is
"sort", but you can also specify "search".*/

/*
ignorePunctuation
Set this property to true to ignore spaces and punctuation when comparing
strings.
*/

/*
numeric
Set this property to true if the strings you are comparing are integers or contain
integers and you want them to be sorted into numerical order instead of alphabetical
order.*/

/*caseFirst
This property specifies which letter case should come first. If you specify
"upper", then “A” will sort before “a”. And if you specify "lower", then “a” will
sort before “A”.*/

const colador = new Intl.Collator().compare;
console.log(["X", "x", "z", "Z", "M"].sort(colador));

const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
console.log(["page23", "page25", "page19"].sort(filenameOrder));

// Find all strings that loosely match a target string
const fuzzyMatcher = new Intl.Collator(undefined, {
  sensitivity: "base",
  ignorePunctuation: true,
}).compare;

//RETRIVES THE INDEX OF Y IN THE STRINGS ARRAY
let strings = ["food", "fool", "Føø Bar"];
console.log(strings.findIndex((s) => fuzzyMatcher(s, "foobar") === 0));
