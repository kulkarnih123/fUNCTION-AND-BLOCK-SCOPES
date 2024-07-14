// FUNCTION SCOPE
function exampleFunction() {
    var functionScopedVariable = "I am inside a function";
    console.log(functionScopedVariable); // This will print: I am inside a function
}

exampleFunction();

console.log(functionScopedVariable); // This will throw a ReferenceError: functionScopedVariable is not defined


// BLOCK SCOPE
if (true) {
    let blockScopedVariable = "I am inside a block";
    console.log(blockScopedVariable); // This will print: I am inside a block
}

console.log(blockScopedVariable); // This will throw a ReferenceError: blockScopedVariable is not defined

for (let i = 0; i < 3; i++) {
    console.log(i); // This will print: 0, 1, 2
}

console.log(i); // This will throw a ReferenceError: i is not defined
