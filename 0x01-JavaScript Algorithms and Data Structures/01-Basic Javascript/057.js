function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var firstItem = arr.shift();

    return firstItem;
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));