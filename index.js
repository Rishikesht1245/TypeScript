// ======== infer types : auto detecting of types ========= */
// let name = "Rishi";
// name = 0;
// =========== defining types ============== */
var userName = "Rishi";
var number = 30;
var isSub = true;
// array of strings
var skills = ["js", "ts"];
var numbers = [12, 23];
// objects
var userDetails = { name: "Rishi", age: 23 };
var personDetails = {
    name: "rishi",
    age: 20,
    getName: function () {
        console.log(this.name);
    },
};
var employeeDetails = {
    name: "Rishi",
    age: 22,
    salary: 30000,
};
// arrays with different types of elements
var mySkills = [1, "Js", 2, "ts"];
var values = {
    name: "rishi",
};
// ============ function ============= */
function getUserName(employeeDetails) {
    return employeeDetails.name;
}
getUserName(employeeDetails);
var currentStatus = "completed";
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
var userDetailsGene = {
    name: "rishi",
    age: 22,
};
var adminDetailsGene = {
    name: "rishi",
    age: 23,
    role: "admin",
};
function getUserDetails(details) {
    return details;
}
var userValue = getUserDetails(userDetailsGene);
var adminValue = getUserDetails(adminDetailsGene);
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
var username = "rishi";
// username = "vasu" -- gives error as we made the username const
var Learner = {
    name: "rishi",
    age: 23,
};
// Learner.name = "vasu"; -- gives error
// ============= keyof and typeof ========= */
console.log(typeof Learner);
