// Create a closure which has three inner functions
function main () {
    let a =0;
    function one () {
        return a++;
    }
    function two () {
        return a++;
    }
    function three () {
        return a++;
    }
    one();
    two();
    three();
    return a;
}

console.log(main())