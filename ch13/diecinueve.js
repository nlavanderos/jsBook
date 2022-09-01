// Asynchronous javaScript

//EVENTS 13.1.2

// Ask the web browser to return an object representing the HTML
// <button> element that matches this CSS selector
// let okay = document.querySelector('#confirmUpdateDialog button.okay');

// Now register a callback function to be invoked when the user // clicks on that button.
// okay.addEventListener('click', applyUpdate);

// 13.1.3 Network Events

// function getCurrentVersionNumber(versionCallback) {

//   // Note callback argument // Make a scripted HTTP request to a backend version API
//   let request = new XMLHttpRequest();

//   request.open("GET", "http://www.example.com/api/version");
//   request.send();

//   // Register a callback that will be invoked when the response arrives
//   request.onload = function () {
//     if (request.status === 200) {
//       // If HTTP status is good, get version number and call callback.
//       let currentVersion = parseFloat(request.responseText);
//       versionCallback(null, currentVersion);
//     } else {
//       // Otherwise report an error to the callback
//       versionCallback(response.statusText, null);
//     }
//   };

//   // Register another callback that will be invoked for network errors
//   request.onerror = request.ontimeout = function (e) {
//     versionCallback(e.type, null);
//   };

// }

// 13.1.4 Callbacks and Events in Node

// const fs = require("fs");
//
// let options = {
//   //default options};
// };

//READING JSON FILE WITH ENCODING AND A CALLBACK FOR READ THIS

// fs.readFile("example.json", "utf-8",(err, text) => {
//   if(err) {
//     console.warn('Could not read config file',err)
//   }
//   else{
//     Object.assign(options, JSON.parse(text))
//   }
//
//   startProgram(options)
// })

//HTTP REQUEST FOR CONTENT OF AN URL

// const https = require("https");
//
// function getText(url, callback) {

//   let request = https.get(url);
//
//   request.on("response", (response) => {
//     let httpStatus = response.statusCode;

//     // The body of the HTTP response has not been received yet.
//     // So we register more event handlers to to be called when it arrives.
//     response.setEncoding("utf-8"); // We're expecting Unicode text
//     let body = ""; // which we will accumulate here.

//     // This event handler is called when a chunk of the body is ready
//     response.on("data", (chunk) => {
//       body += chunk;
//     });

//     // This event handler is called when the response is complete
//     response.on("end", () => {
//       if (httpStatus === 200) {
//         callback(null, body);
//       } else {
//         callback(httpStatus, null);
//       }
//     });
//   });

//   // If the HTTP response was good
//   // Pass response body to the callback
//   // Otherwise pass an error
//   // We also register an event handler for lower-level network errors
//   request.on("error", (err) => {
//     callback(err, null);
//   });
// }

// 13.2 Promises, a core language feature designed to simplify asynchronous programming

//EXAMPLE

// function displayUserProfile(profile) { /* implementation omitted */ }
// getJSON("/api/user/profile").then(displayUserProfile);

//HANDLING ERRORS

// getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError)

//CHAINED PROMISES

// fetch(documentURL) // Make an HTTP request
//   .then((response) => response.json()) // Ask for the JSON body of the response
//   .then((document) => {
//     // When we get the parsed JSON
//     return render(document); // display the document to the user
//   })
// .then(rendered => {
//   cacheInDatabase(rendered);
// })
//   .catch(error => handle(error));

//HTTP REQUEST WITH RESPONSE IS OK AND HEADERS IN JSON

// fetch("/api/user/profile").then(response => {
// // When the promise resolves, we have status and headers
// if (response.ok &&
//   response.headers.get("Content-Type") === "application/json") {
//     // What can we do here? We don't actually have the response body yet.
//   } });

// 13.2.3 Resolving Promises

//example of retrying a query

// queryDatabase()
//   .catch((e) => wait(500).then(queryDatabase)) // On failure, wait and retry .then(displayTable)
//   .catch(displayDatabaseError);

// 13.2.5 Promises in Parallel

//Promise.All  rejects when any of the input Promises is rejected.

// // We start with an array of URLs
// const urls = [
//   /* zero or more URLs here */
// ];
//
// // And convert it to an array of Promise objects
// promises = urls.map((url) => fetch(url).then((r) => r.text())); // Now get a Promise to run all those Promises in parallel
// Promise.all(promises)
//   .then((bodies) => {
//     /* do something with the array of strings */
//   })
//   .catch((e) => console.error(e));

//Promise.allSettled never rejects promises

Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(
  (results) => {
    results[0]; // => { status: "fulfilled", value: 1 }
    results[1]; // => { status: "rejected", reason: 2 }
    results[2]; // => { status: "fulfilled", value: 3 }
  }
);

// Promise example

// function getJSON(url) {
//   return fetch(url).then(response => response.json());
// }

//NESTED PROMISES

function wait(duration) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // These control the Promise
    // If the argument is invalid, reject the Promise
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented"));
    }

    // Otherwise, wait asynchronously and then resolve the Promise. // setTimeout will invoke resolve() with no arguments, which means // that the Promise will fulfill with the undefined value.
    setTimeout(resolve, duration);
  });
}



// If it parsed successfully, fulfill the Promise resolve(parsed);


function equal(a) {
  const same = 'exito' === a ;
  return new Promise((resolve, reject)=>{
    console.log('Es lo esperado ',same)
    setTimeout(()=>{resolve(same)},250)
  })
}

function creD(url){
  return new Promise((resolve, reject)=>{
    console.log('Muestra la url ',url)
    setTimeout(()=>{resolve('exito')},250)
    return equal('exito')
  })
}


console.log(creD('www.google.com').then((success)=>{console.log(success)}))



//Promises in sequence


function fetchSequentially(urls) {
// We'll store the URL bodies here as we fetch them
const bodies = [];
  // Here's a Promise-returning function that fetches one body
  function fetchOne(proxy) {
    return fetch(proxy)
      .then(response => response.text())
      .then(body => {
// We save the body to the array, and we're purposely // omitting a return value here (returning undefined)
        bodies.push(body);
      });
  }

  // Start with a Promise that will fulfill right away (with value undefined)
  let p = Promise.resolve(undefined);
// Now loop through the desired URLs, building a Promise chain

// of arbitrary length, fetching one URL at each stage of the chain
for(let proxy of urls) {
  p = p.then(() => fetchOne(proxy));
}
// When the last Promise in that chain is fulfilled, then the
// bodies array is ready. So let's return a Promise for that

// bodies array. Note that we don't include any error handlers: // we want to allow errors to propagate to the caller.
return p.then(() => bodies);

}




fetchSequentially(['http://www.google.com','http://www.google.com'])
  .then(bodies => { console.log(bodies) }) .catch(e => console.error(e));