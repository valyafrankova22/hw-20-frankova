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
const find =  (arr, callback) => {

    for(let i = 0; i < arr.length; i++) {

        if( callback( arr[i], i, arr )) {
            return arr[i];
        }
    }
}
console.log(find([`Vlad`, `Valya`, `Anna`, `Kate`], item => item === `Valya`));


// Task #4 findIndex
const findIndex =  (arr, callback) => {

    for(let i = 0; i < arr.length; i++) {

        if( callback( arr[i], i, arr )) {
            return i;
        }
    }
}
console.log(findIndex([`Vlad`, `Valya`, `Anna`, `Kate`], item => item === `Kate`));


// Task #5 Includes
function includes (array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return true;
        }
    }
    return false;
}
console.log(includes([1, 2, 3, 4], 2));
console.log(includes([1, 2, 3, 4], 8));


// Task #6 every
const every = (array, callback) => {

    for (let i = 0; i < array.length; i++) {

        if(!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 7, 5, 8], item => item < 10));
console.log(every([1, 3, 7, 5, 8], item => item < 7));


// Task #7 some
const some = (array, callback) => {

    for (let i = 0; i < array.length; i++) {

        if(callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

console.log(some([1, 3, 7, 5, 8], item => item === 7));
console.log(some([1, 3, 7, 5, 8], item => item === 4));

