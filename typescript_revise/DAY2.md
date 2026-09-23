# Day 2 — Structures, Narrowing & Interfaces Deep Dive (3 hours)

## 2.1 Interfaces vs Type Aliases

Both describe shapes. Key differences:

```typescript
// Interfaces can be extended and merged (declaration merging)
interface Animal { name: string }
interface Animal { legs: number } // merges with the one above

interface Dog extends Animal { breed: string }

// Type aliases use & for composition, and can alias unions/primitives (interfaces can't)
type Status = "loading" | "success" | "error"; // interface can't do this
```

> **Rule of thumb:** use `interface` for object shapes you expect to extend (especially public APIs, classes); use `type` for unions, tuples, and function types.

## 2.2 Readonly & Index Signatures

```typescript
interface Config {
  readonly apiKey: string;      // can't be reassigned after creation
  [key: string]: any;           // index signature: any other string key allowed
}

const cfg: Config = { apiKey: "abc123", timeout: 3000 };
// cfg.apiKey = "xyz"; // ❌ Error: read-only property
```

## 2.3 Literal Types

```typescript
type Direction = "up" | "down" | "left" | "right";
function move(dir: Direction) { /* only these 4 strings allowed */ }

let x: 5 = 5; // literal type — x can ONLY ever be 5
```

## 2.4 Type Narrowing

TypeScript narrows a broader type to a specific one based on runtime checks:

```typescript
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // narrowed to string here
  } else {
    console.log(value.toFixed(2));    // narrowed to number here
  }
}

class Cat { meow() {} }
class Dog { bark() {} }
function speak(animal: Cat | Dog) {
  if (animal instanceof Cat) animal.meow();
  else animal.bark();
}

interface Fish { swim: () => void }
interface Bird { fly: () => void }
function move(pet: Fish | Bird) {
  if ("swim" in pet) pet.swim(); // "in" checks property existence
  else pet.fly();
}
```

**Discriminated unions** — the single most useful pattern for modeling state:

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "square": return shape.side ** 2;
  }
}
```

## 2.5 Type Assertions

```typescript
const input = document.getElementById("email") as HTMLInputElement;
// Use only when YOU know more than the compiler — it does no runtime check
```

## 2.6 Enums, More Detail

```typescript
enum Status { Active = "ACTIVE", Inactive = "INACTIVE" } // string enum — safer for debugging
const enum Direction { Up, Down } // const enum — inlined at compile time, no object generated
```

## 2.7 Tuples, Advanced

```typescript
let entry: readonly [string, number] = ["age", 30]; // can't mutate
let labeled: [name: string, age: number] = ["Alex", 30]; // labels for readability
```

## Mini-exercise

Model an `ApiResponse` as a discriminated union with `{ status: "success"; data: string }` and `{ status: "error"; message: string }`, then write a function that handles both cases with a switch.