// we can assign a function into a variable 
// it different from assing retun value to a function 

var f1 = function hello() {

    console.log("Hello");

}

f1();

var f = function add(a, b) {
    return a + b;
}

console.log(f(10, 20)); // invoking function by variable


