//ES6 EXPORTS

export const PI=Math.PI
 export class Circle {
    constructor(r) { this.r = r; }
    area() { return PI * this.r * this.r; }
}



//RE-EXPORTS AND DEFAULT
export{PI as default}


// export { default as stddev } from "./statsNode.js";

// EXPORT RENAMING IS POSIBBLE

// export {
//     layout as calculateLayout,
//     render as renderLayout
// };