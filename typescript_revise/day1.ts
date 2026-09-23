// BASIC TYPES
let age: number = 20;
let name: string = "Tom";
let isActive: boolean = true;
let notAssigned: undefined = undefined;
let isEmpty: null = null;

// COMPLEX TYPES
let scores: number[] = [1, 2];
let names: Array<string> = ["Alex", "Soman"];
let tuple: [string, number] = ["Alex", 3]; // fixed length, fixed types per position

// Admin = 0, Editor =1 (auto value set) (no control)
enum Role {
  Admin = 1,
  Editor,
  Viewer,
} // editor will automatically get value 2
let userRole: Role = Role.Admin;
console.log(userRole); // will be 0

// enums with value provided (controlled values)
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}
const userStatus: Status = Status.Active;
console.log(userStatus); // ACTIVE

// ANY
let anything: any = 5; // no type checking; (avoid this)
let unknownValue: unknown = 5; // safer than any (forces you to check the type before doing anything with it)

let val: unknown = "rishi";
// console.log(val.toUppserCase())  // val is of type unknown error
// correct approach
if (typeof val === "string") {
  console.log(val.toLocaleLowerCase());
}

function fail(): never {
  throw new Error("always throws");
}

function log(msg: string): void {
  console.log(msg);
}

// TYPE INFERENCE
let city = "Kozhikode"; // will be inferred as string no need to annotate.

// UNION & INTERSECTION TYPES
// Union this or that |
function printId(id: number | string) {
  console.log(id);
}

// intersection this and that = combine types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged; // intersection of two types it should contain name and age

const p: Person = { name: "Rishikesh", age: 26 };

// Type Aliases
type ID = string | number;
type Point = {
  x: number;
  y: number;
};

// Functions in depth
// optional and default
function greet(
  name: string,
  greetings: string = "Hello",
  suffix?: string,
): string {
  return `${greetings} ${name}${suffix ?? ""}`;
}

// rest params ... (it will be catch as an array)
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Funciton overlads (multipe call signature for one function (it can be called in any of the payloads (types)))
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// Objects and Interfaces
// interfaces are used for defining the structure of objects.
interface User {
  id: number;
  name: string;
  email?: string;
}

function displayUser(user: User): void {
  console.log(user.name);
}

displayUser({ id: 1, name: "rishikesh" });

interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

function calculateTotal(prices: number[], taxRate: number): number {
  if (prices.length === 0) return 0;
  const totalPrices: number = prices.reduce((a, b) => a + b, 0);
  return totalPrices + totalPrices * (taxRate / 100);
}

console.log(calculateTotal([1,100,200], 5));
