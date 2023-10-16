"use strict";
// ======== infer types : auto detecting of types ========= */
// let name = "Rishi";
// name = 0;
// =========== defining types ============== */
let userName = "Rishi";
let number = 30;
let isSub = true;
// array of strings
let skills = ["js", "ts"];
let numbers = [12, 23];
// objects
let userDetails = { name: "Rishi", age: 23 };
let personDetails = {
    name: "rishi",
    age: 20,
    getName() {
        console.log(this.name);
    },
};
let employeeDetails = {
    name: "Rishi",
    age: 22,
    salary: 30000,
};
// arrays with different types of elements
const mySkills = [1, "Js", 2, "ts"];
let values = {
    name: "rishi",
};
// ============ function ============= */
function getUserName(employeeDetails) {
    return employeeDetails.name;
}
getUserName(employeeDetails);
let currentStatus = "completed";
function add(num1, num2) {
    return num1 + num2;
}
// add(2, "2"); === trow error as we overloaded the any function with the string or number types
add(2, 2);
add("2", "2");
// ============ Generics =================== */
function getAge(age) {
    return age;
}
getAge(2);
getAge("23");
const userDetailsGene = {
    name: "rishi",
    age: 22,
};
const adminDetailsGene = {
    name: "rishi",
    age: 23,
    role: "admin",
};
function getUserDetails(details) {
    return details;
}
const userValue = getUserDetails(userDetailsGene);
const adminValue = getUserDetails(adminDetailsGene);
console.log(adminValue.role);
console.log(userValue.age);
// =================== ENUMS ================== */
var StatusTypeEnum;
(function (StatusTypeEnum) {
    StatusTypeEnum["PENDING"] = "pending";
    StatusTypeEnum["COMPLETED"] = "completed";
    StatusTypeEnum["FAILED"] = "failed";
})(StatusTypeEnum || (StatusTypeEnum = {}));
console.log(StatusTypeEnum.PENDING);
// ============= as const ==================== */
let username = "rishi";
// username = "vasu" -- gives error as we made the username const
const Learner = {
    name: "rishi",
    age: 23,
};
// Learner.name = "vasu"; -- gives error
// ============= keyof and typeof ========= */
function getLearner(learner) {
    return learner;
}
//------- Readonly
const userDetailsUtils = {
    name: "rishi",
    age: 22,
};
// userDetailsUtils.name = "vasu" // gives error as it is readonly type
// --------Partial
const UserDetailsPartial = {
    name: "rishi",
};
// won't give error if we don't mention the age
// -------- Required -- to make all the fields required (if we mention some fields optional)
const userDetailsRequired = {
    name: "rishi",
    age: 22,
};
// ---------- Pick --- used to pick only some properties from the type
const userDetailsPick = {
    age: 22,
};
// ---------- Omit -- Used to omit the specified field
const userDetailsOmit = {
    age: 22,
};
const userExclude = "Manager";
const food = {
    name: "Pizza",
};
// ========== Other Types in Typescript ======== */
// 1. any
