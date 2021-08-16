"use strict";
function addFunc(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(addFunc(5, 12));
var combineValues;
combineValues = addFunc;
addAndHandle(5, 6, function (a) { return console.log(a); });
var userInput;
var userName;
userInput = 5;
userInput = "Sachin";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error code", 500);
