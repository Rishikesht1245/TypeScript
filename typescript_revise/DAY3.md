# Day 3 — Object-Oriented Programming in TypeScript (3 hours)

This is where TypeScript really shines compared to plain JS — real access modifiers, abstract classes, and interfaces enforced at compile time.

## 3.1 Classes: The Basics

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const alex = new Person("Alex", 30);
```

## 3.2 Access Modifiers (Encapsulation)

```typescript
class BankAccount {
  public accountHolder: string;   // accessible anywhere (default)
  private balance: number;        // accessible only inside this class
  protected accountType: string;  // accessible in this class + subclasses

  constructor(holder: string, initial: number) {
    this.accountHolder = holder;
    this.balance = initial;
    this.accountType = "standard";
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance; // controlled access — no one can touch balance directly
  }
}

const acc = new BankAccount("Alex", 1000);
// acc.balance; // ❌ Error: 'balance' is private
```

**Shorthand: parameter properties** (very common in real code):

```typescript
class Product {
  constructor(
    public name: string,
    private price: number,
    readonly sku: string
  ) {} // this auto-creates and assigns the three properties — no body needed
}
```

## 3.3 Readonly Properties & Getters/Setters

```typescript
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    if (value <= 0) throw new Error("Radius must be positive");
    this._radius = value;
  }

  get area(): number {
    return Math.PI * this._radius ** 2;
  }
}

const c = new Circle(5);
c.radius = 10;      // calls the setter, validated
console.log(c.area); // calls the getter, computed on access
```

## 3.4 Static Members

```typescript
class MathUtils {
  static PI = 3.14159;
  static square(n: number): number {
    return n * n;
  }
}
console.log(MathUtils.square(4)); // no instance needed
```

## 3.5 Inheritance

```typescript
class Animal {
  constructor(protected name: string) {}
  makeSound(): string {
    return "Some generic sound";
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name); // must call super() before using 'this' in a subclass constructor
  }

  makeSound(): string {           // method overriding
    return `${this.name} says Woof! (${this.breed})`;
  }
}

const d = new Dog("Rex", "Labrador");
console.log(d.makeSound());
```

## 3.6 Polymorphism

```typescript
const animals: Animal[] = [new Animal("Generic"), new Dog("Rex", "Lab")];
animals.forEach(a => console.log(a.makeSound())); // each calls its OWN version
```

## 3.7 Abstract Classes

Can't be instantiated directly — they exist to be extended, and can force subclasses to implement certain methods:

```typescript
abstract class Shape {
  abstract area(): number;        // no body — subclasses MUST implement this
  describe(): string {            // regular method — shared by all subclasses
    return `This shape has area ${this.area()}`;
  }
}

class Square extends Shape {
  constructor(private side: number) { super(); }
  area(): number { return this.side ** 2; }
}

// const s = new Shape(); // ❌ Error: cannot instantiate an abstract class
const sq = new Square(4);
console.log(sq.describe());
```

## 3.8 Interfaces with Classes

```typescript
interface Flyable {
  fly(): void;
}
interface Swimmable {
  swim(): void;
}

// A class can implement multiple interfaces — TS's answer to lacking multiple inheritance
class Duck implements Flyable, Swimmable {
  fly() { console.log("Flying"); }
  swim() { console.log("Swimming"); }
}
```

## 3.9 Generics in Classes

```typescript
class Box<T> {
  private contents: T;
  constructor(value: T) { this.contents = value; }
  getValue(): T { return this.contents; }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("hello");
```

## 3.10 A Practical Pattern: Singleton

```typescript
class Logger {
  private static instance: Logger;
  private constructor() {} // private constructor blocks 'new Logger()' from outside

  static getInstance(): Logger {
    if (!Logger.instance) Logger.instance = new Logger();
    return Logger.instance;
  }

  log(msg: string) { console.log(`[LOG]: ${msg}`); }
}

Logger.getInstance().log("App started");
```

## Mini-exercise

Build an abstract class `Employee` with an abstract method `calculateSalary(): number`, then create `FullTimeEmployee` and `ContractEmployee` subclasses that implement it differently. Use `private`/`protected` appropriately.