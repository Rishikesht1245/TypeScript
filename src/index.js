// ======== infer types : auto detecting of types ========= */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    // no need for initialization or definition if we defined the properties inside the constructor
    function Player(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
    }
    return Player;
}());
var abhi = new Player(300, 100, 200);
console.log(abhi.height); // only height will be available as other properties are private and protected
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2(height, weight, power, special) {
        var _this = _super.call(this, height, weight, power) || this;
        _this.special = special;
        // power will be accessible since it is protected (child class can access it)
        _this.getPower = function () { return _this.power; };
        _this.id = String(Math.random() * 1000);
        return _this;
    }
    return Player2;
}(Player));
var rishi = new Player2(100, 100, 100, true);
console.log(rishi.special);
console.log(rishi.id);
// getters and setters in class
// 1 . getters are used to return a value from a class and it is defined using get keyword
// 2. setters are used to set or change the value of a variable present inside a class it is defined using set keyword
var Reader = /** @class */ (function () {
    function Reader(name, book) {
        this.name = name;
        this.book = book;
    }
    Object.defineProperty(Reader.prototype, "getReaderName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reader.prototype, "SetReaderName", {
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Reader;
}());
var reader = new Reader("Rishikesh", "atomic habits");
console.log((reader.SetReaderName = "rishi"));
console.log(reader.getReaderName);
var users = [
    {
        name: "rishi",
        age: 23,
    },
    {
        name: "abay",
        age: 21,
    },
];
function filterPeople(array, key, value) {
    return array.filter(function (item) { return item[key] === value; });
}
var person = filterPeople(users, "name", "rishi");
console.log(person);
