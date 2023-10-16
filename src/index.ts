// ======== infer types : auto detecting of types ========= */

// let name = "Rishi";
// name = 0;

// =========== defining types ============== */
let userName: string = "Rishi";
let number: number = 30;
let isSub: boolean = true;

// array of strings
let skills: string[] = ["js", "ts"];
let numbers: number[] = [12, 23];

// objects
let userDetails: { name: string; age: number } = { name: "Rishi", age: 23 };
// userDetails.age = "22"

// ============= Interface ================ */
interface Details {
  name: string;
  age: number;
  getName: () => void;
}

let personDetails: Details = {
  name: "rishi",
  age: 20,
  getName() {
    console.log(this.name);
  },
};

// =========== Type ===================== */

type Employee = {
  name: string;
  age: number;
  salary: number;
};

let employeeDetails: Employee = {
  name: "Rishi",
  age: 22,
  salary: 30000,
};

// ============= Union and Optional ========== */
type Person = {
  name: string | number;
  age: string | number;
};

// arrays with different types of elements
const mySkills: (string | number)[] = [1, "Js", 2, "ts"];

// optional operator ?
type Values = {
  name: string;
  getValue?: () => void;
};

let values: Values = {
  name: "rishi",
};

// ============ function ============= */

function getUserName(employeeDetails: Employee): string {
  return employeeDetails.name;
}

getUserName(employeeDetails);

// =========== Named Types ============ */
type StatusType = "completed" | "rejected" | "pending";
let currentStatus: StatusType = "completed";

// ========== Function Overloading ============ */
function add(num1: number, num2: number): string;
function add(num1: string, num2: string): string;
function add(num1: any, num2: any): any {
  return num1 + num2;
}

// add(2, "2"); === trow error as we overloaded the any function with the string or number types
add(2, 2);
add("2", "2");

// ============ Generics =================== */
function getAge<T>(age: T): T {
  return age;
}

getAge<number>(2);
getAge<string>("23");

type UserDetailsGene = {
  name: string;
  age: number;
};

const userDetailsGene = {
  name: "rishi",
  age: 22,
};

// copying admin details types properties
type AdminDetailsGene = UserDetailsGene & {
  role: string;
};

const adminDetailsGene = {
  name: "rishi",
  age: 23,
  role: "admin",
};

function getUserDetails<T>(details: T): T {
  return details;
}

const userValue = getUserDetails<UserDetailsGene>(userDetailsGene);
const adminValue = getUserDetails<AdminDetailsGene>(adminDetailsGene);

console.log(adminValue.role);
console.log(userValue.age);
// reusability increases while we make the functions to accept generics types

// copying types declared using interfaces
/* We need to use the extends keyword */

interface CopyType1 {
  name: string;
  age: number;
}

interface CopyType2 extends CopyType1 {
  role: string;
}

// =================== ENUMS ================== */
enum StatusTypeEnum {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

console.log(StatusTypeEnum.PENDING);

// ============= as const ==================== */

let username = "rishi" as const;
// username = "vasu" -- gives error as we made the username const

const Learner = {
  name: "rishi",
  age: 23,
} as const;

// Learner.name = "vasu"; -- gives error

// ============= keyof and typeof ========= */
function getLearner(learner: keyof typeof Learner) {
  return learner;
}

// ============= Utility Types ============= */
type User = {
  name: string;
  age: number;
};

//------- Readonly
const userDetailsUtils: Readonly<User> = {
  name: "rishi",
  age: 22,
};

// userDetailsUtils.name = "vasu" // gives error as it is readonly type

// --------Partial
const UserDetailsPartial: Partial<User> = {
  name: "rishi",
};
// won't give error if we don't mention the age

// -------- Required -- to make all the fields required (if we mention some fields optional)
const userDetailsRequired: Required<User> = {
  name: "rishi",
  age: 22,
};

// ---------- Pick --- used to pick only some properties from the type
const userDetailsPick: Pick<User, "age"> = {
  age: 22,
};

// ---------- Omit -- Used to omit the specified field
const userDetailsOmit: Omit<User, "name"> = {
  age: 22,
};

// --------- Exclude --- Used to exclude a value from an named types
type UsersType = "Admin" | "Manager" | "User";

const userExclude: Exclude<UsersType, "Admin"> = "Manager";
// const userExclude: Exclude<UsersType, "Admin"> = "Admin"; // admin gives error

// Record ---- Useful when we are not sure about the type of keys and values of an object

type Food = Record<string, any>;

// another way of using records
type Foods = {
  [index: string]: string;
};

const food: Food = {
  name: "Pizza",
};

// ========== Other Types in Typescript ======== */

// 1. any
