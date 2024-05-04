import binarySearch from "./index.js";

console.assert(binarySearch([1,2,3,4,5], 1) === 0, "This is test case 1");
console.assert(binarySearch([1,2,3,4,5], 2) === 1, "This is test case 2");
console.assert(binarySearch([1,2,3,4,5], 3) === 2, "This is test case 3");
console.assert(binarySearch([1,2,3,4,5], 4) === 3, "This is test case 4");
console.assert(binarySearch([1,2,3,4,5], 8) === -1, "This is test case 5");