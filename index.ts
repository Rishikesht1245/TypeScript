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
