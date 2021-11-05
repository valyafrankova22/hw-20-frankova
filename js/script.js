// Task #1
function indexOf (array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(indexOf([1, 2, 3, 4], 2));
console.log(indexOf([1, 2, 3, 4], 4));


// Task #2
function lastIndexOf (array, value, fromIndex = null) {
    fromIndex === null ? fromIndex = array.length - 1 : null;

    for(let i = fromIndex; i >= 0; i--) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(lastIndexOf([1, 2, 3, 4], 2));


// Task #3 Find
function findFunc (array, value) {
    for (let i of array) {
        if (i === value) return value;
    }
    return undefined;
}
console.log(findFunc([`Vlad`, `Valya`, `Anna`, `Kate`], `Valya`));


// Task #4 findIndex
function findIndex (array, value) {
    for (let i of array) {
        if (i === value) return array.indexOf(value);
    }
    return -1;
}
console.log(findIndex([`Vlad`, `Valya`, `Anna`, `Kate`], `Anna`));
console.log(findIndex([`Vlad`, `Valya`, `Anna`, `Kate`], `Pasha `));


// Task #5 Includes
function includes(array, value) {
    for(let i of array) {
        if (i === value) return true;
    }
    return false;
}
console.log(includes([1, 2, 3, 4, 5, 6], 4));
console.log(includes([1, 2, 3, 4, 5, 6], 9));

// Task #6 every

// Task #7 some


