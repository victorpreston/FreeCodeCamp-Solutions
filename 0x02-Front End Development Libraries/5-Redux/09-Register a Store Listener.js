const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const increment = () => {
    return count++;
};

store.subscribe(increment);
// Change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);