// INTERFACES VS TYPE ALIASES

// interfaces used to structure objects and it should be in object form {}
// basically use this for object shapes
interface Animal {
  name: string;
}

interface Animal {
  legs: 4;
}

// extends used for merging the Animal interface with the breed property
interface Dog extends Animal {
  breed: string;
}

// type aliases can use & or | for intersection and unions  (interfaces cant do this)
type Status = "pending" | "success" | "loading";
const fetchingStatus: Status = "loading";

// Readonyl and Index signature
interface Config {
  readonly apiKey: string;
  [key: string]: any; // index signature any other string key allowed (any value in string)
  // can add n number of properties inside the interface
}

const config: Config = {
  apiKey: "ajldafjle2",
  value: 10,
  class: 12,
};

// readonly
// config.apiKey = 100;

// Literal Types
// Types that we declare the values
type Direction = "up" | "down" | "right" | "left";
function move(dir: Direction) {}

let x: 5 = 5; // x can only be 5

// Type Narrowing
// condition checking in or types (union types)
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // narrowed to string here
  } else {
    console.log(value.toFixed(2));
  }
}

class Cat {
  meow() {}
}

class Dog {
  bark() {}
}

function speak(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    // using instance of
    animal.meow();
  } else {
    animal.bark();
  }
}

// using in (to check if property available)
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function moveTo(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// Discriminated unions (better for using switch cases and modeling state)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

// Type assertions  (using as keyword)
// const input = document.getElementById("email") as HTMLInputElement;
// it doesnot do the run time check;

// ENUM more details
enum Statuses {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

const enum Directions {
  Up,
  Down,
} // inline at combile time, no object generated

console.log(Directions.Up);

// Tuples
// A tuple is an array with fixed length and a fixed type for each position
let entry: readonly [string, number] = ["age", 30];
let labelled: [name: string, age: number] = ["alex", 30]; // for better readability

type ApiResponse =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

function handleResponse(res: ApiResponse){
    switch(res.status){
        case "error":
            console.log(res.message)
            break;
        case "success":
            console.log(res.data)
            break;
    }

}
