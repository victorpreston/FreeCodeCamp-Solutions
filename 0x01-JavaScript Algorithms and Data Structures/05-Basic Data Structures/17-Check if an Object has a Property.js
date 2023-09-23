// Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line

    return (
        userObj.hasOwnProperty("Alan")
        && userObj.hasOwnProperty("Jeff")
        && userObj.hasOwnProperty("Sarah")
        && userObj.hasOwnProperty("Ryan")
    );

    // Only change code above this line
}

console.log(isEveryoneHere(users));