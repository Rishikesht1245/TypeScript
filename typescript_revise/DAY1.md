# Day 1 — Foundations (3 hours)

## 1.1 Why TypeScript

TypeScript = JavaScript + a type system that catches errors at compile time instead of runtime. It compiles down to plain JS. Every valid JS file is (almost) valid TS.

## 1.2 Basic Types

```typescript
let age: number = 30;
let name: string = "Alex";
let isActive: boolean = true;
let notAssigned: undefined = undefined;
let empty: null = null;

let scores: number[] = [90, 85, 77];
let names: Array<string> = ["Alex", "Sam"];

let tuple: [string, number] = ["Alex", 30]; // fixed length, fixed types per position

enum Role { Admin, Editor, Viewer }
let userRole: Role = Role.Admin; // 0

let anything: any = 5;       // opts OUT of type checking — avoid when possible
let unknownVal: unknown = 5; // safer "any": must narrow before use

function fail(): never { throw new Error("always throws"); }
function log(msg: string): void { console.log(msg); }
```

**`any` vs `unknown`:** `any` disables type checking entirely. `unknown` forces you to check the type before doing anything with it:

```typescript
let val: unknown = "hello";
// val.toUpperCase(); // ❌ Error: Object is of type 'unknown'
if (typeof val === "string") {
  val.toUpperCase(); // ✅ OK, narrowed to string
}
```

## 1.3 Type Inference

TypeScript often figures out the type without you writing it:

```typescript
let city = "Kozhikode"; // inferred as string, no need to annotate
```

> **Rule of thumb:** let inference work for local variables; annotate function parameters and return types explicitly (self-documenting, catches mistakes early).

## 1.4 Union & Intersection Types

```typescript
// Union: "this OR that"
function printId(id: number | string) {
  console.log(`ID: ${id}`);
}

// Intersection: "this AND that" — combine types
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

const p: Person = { name: "Alex", age: 30 };
```

## 1.5 Type Aliases

```typescript
type ID = string | number;
type Point = { x: number; y: number };

function move(point: Point, id: ID) { /* ... */ }
```

## 1.6 Functions in Depth

```typescript
// Optional & default params
function greet(name: string, greeting: string = "Hello", suffix?: string): string {
  return `${greeting}, ${name}${suffix ?? ""}`;
}

// Rest params
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Function overloads — multiple call signatures for one function
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
```

## 1.7 Objects & Interfaces (intro)

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

function displayUser(user: User): void {
  console.log(user.name);
}

displayUser({ id: 1, name: "Alex" }); // email omitted, that's fine
```

## Mini-exercise

Write a function `calculateTotal(prices: number[], taxRate: number): number` with proper types, and an interface `Product { name: string; price: number; inStock: boolean }` and a function that filters an array of `Product` for items in stock.