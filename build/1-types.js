"use strict";
var add = function (n1, n2) {
    return n1 + n2;
};
var number1 = 5;
var number2 = 2.8;
console.log(add(number1, number2));
var RoleTypes;
(function (RoleTypes) {
    RoleTypes[RoleTypes["AUTHOR"] = 0] = "AUTHOR";
    RoleTypes[RoleTypes["READER"] = 1] = "READER";
})(RoleTypes || (RoleTypes = {}));
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "sachin",
    age: 40,
    hobbies: ["sports", "cooking"],
    role: RoleTypes.AUTHOR,
    //role: [2, "author"],
};
// person.role.push("admin");
var favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.role);
