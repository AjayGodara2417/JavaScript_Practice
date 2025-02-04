// Create a closure which has one inner function

function increase () {
    let inc = 0;
    function increment() {
        return inc++;
    }
    increment();
    return inc;
}

console.log(increase());