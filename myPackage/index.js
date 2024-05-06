function sum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}

function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

function findMax(array) {
    if (array.length === 0) {
        return undefined;
    }
    return Math.max(...array);
}

function findMin(array) {
    if (array.length === 0) {
        return undefined;
    }
    return Math.min(...array);
}

module.exports = {
    sum,
    removeDuplicates,
    findMax,
    findMin
};

console.log(removeDuplicates([1,2,3,1,2,3,1,2,3]))