// FOR NODEJS FETCH() API IS NOT BUILT IN

const http = import("http");

function getJSON(url) {
  // Create and return a new Promise
  return new Promise((resolve, reject) => {
    // Start an HTTP GET request for the specified URL
    let request = http.get(url, (response) => {
      // called when response starts
      // Reject the Promise if the HTTP status is wrong
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP status ${response.statusCode}`));
        response.resume(); // so we don't leak memory
      }
      // And reject if the response headers are wrong
      else if (response.headers["content-type"] !== "application/json") {
        reject(new Error("Invalid content-type"));
        response.resume(); // don't leak memory
      } else {
        // Otherwise, register events to read the body of the response
        let body = "";
        response.setEncoding("utf-8");

        response.on("data", (chunk) => {
          body += chunk;
        });

        response.on("end", () => {
          // When the response body is complete, try to parse it
          try {
            let parsed = JSON.parse(body);
          } catch (e) {
            // If parsing failed, reject the Promise reject(e);
          }
        });

      }
    });
    // We also reject the Promise if the request fails before we // even get a response (such as when the network is down)
    request.on("error", (error) => {
      reject(error);
    });

  });
}