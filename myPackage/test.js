const { sum, removeDuplicates, findMax, findMin } = require('./index');

console.assert(sum([1,2,3,4,5]) === 15, "This is test case 1");
console.assert(
    JSON.stringify(removeDuplicates([1,2,3,1,2,3,1,2,3])) === JSON.stringify([1, 2, 3]),
    "This is test case 2"
);
console.assert(findMax([1,2,3,4,5]) === 5, "This is test case 3");
console.assert(findMin([1,2,3,4,5]) === 1, "This is test case 4");
