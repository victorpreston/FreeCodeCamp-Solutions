// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) return;

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);