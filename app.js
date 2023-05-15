function add2(n1, n2) {
    return n1 + n2;
}
function printResult2(num) {
    console.log("Result: " + num);
}
printResult2(add2(5, 7));
console.log(printResult2(add2(5, 7)));
var combineValues;
combineValues = add2;
console.log(combineValues(8, 8));
