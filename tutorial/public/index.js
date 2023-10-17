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
function getLearner(learner) {
    return learner;
}
//------- Readonly
var userDetailsUtils = {
    name: "rishi",
    age: 22,
};
// userDetailsUtils.name = "vasu" // gives error as it is readonly type
// --------Partial
var UserDetailsPartial = {
    name: "rishi",
};
// won't give error if we don't mention the age
// -------- Required -- to make all the fields required (if we mention some fields optional)
var userDetailsRequired = {
    name: "rishi",
    age: 22,
};
// ---------- Pick --- used to pick only some properties from the type
var userDetailsPick = {
    age: 22,
};
// ---------- Omit -- Used to omit the specified field
var userDetailsOmit = {
    age: 22,
};
var userExclude = "Manager";
var food = {
    name: "Pizza",
};
var foods = {
    name: "rishi",
};
// =================== Classes in Type Script ================== */
var Player = /** @class */ (function () {
    function Player(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
    return Player;
}());
var abhi = new Player(100, 100, 100);
console.log(abhi.height); // only height will be available as other properties are private and protected
