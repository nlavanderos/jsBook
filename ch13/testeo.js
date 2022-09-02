// 13.3.1 await Expressions
import fetch from "node-fetch";

//FETCH PUBLIC API OF DOGS
// let response = await fetch("https://dog.ceo/api/breeds/image/random");
// let profile = await response.json();
// console.log(profile);

//any await inside a function requires async word before the function
async function getHighScore(url) {
  return (await fetch(url)).json();
}

//AWAIT RESOLVERS THE PROMISE LIKE RESOLVE()
// displayHighScore(await getHighScore());

//require resolve,then or promise.all
// console.log(getHighScore("https://dog.ceo/api/breeds/image/random"));
// getHighScore("https://dog.ceo/api/breeds/image/random").then((a) => {
//   console.log(a.message);
// });

// function randomDog(url, count, base, increment) {
//   function def(time) {
//     setTimeout(() => {
//       getHighScore(url).then((a) => {
//         console.log(a.message);
//       });
//     }, time);
//   }
//   for (let x = 0; x < count; x++) {
//     def(base);
//     base += increment;
//     console.log(base);
//   }
// }
// randomDog("https://dog.ceo/api/breeds/image/random", 5, 1000, 1000);

// PROMISE ALL VERSION

// let values = await Promise.all([
//   getHighScore("https://dog.ceo/api/breeds/image/random"),
//   getHighScore("https://dog.ceo/api/breeds/image/random"),
// ]);

// values.forEach((a) => {
//   console.log(a.message);
// });

const t0 = performance.now();
function elapsedTime(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function* def(url, time, quanty) {
  for (let i = 0; i < quanty; i++) {
    await elapsedTime(time);
    yield getHighScore(url);
  }
}
for await (let x of def("https://dog.ceo/api/breeds/image/random", 1000, 5)) {
  console.log(x);
}
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
