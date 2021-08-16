function addFunc(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(addFunc(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = addFunc;

addAndHandle(5, 6, (a) => console.log(a));

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sachin";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error code", 500);
