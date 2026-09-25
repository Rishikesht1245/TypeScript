// Classes

class Person{
    name: string;
    age : number;

    // initializes the propertis present in the class
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    // methods present in the class
    greet(): string{
        return `Hi, I'm ${this.name}. Your age is ${this.age}`
    }
}

// creating instance of the class
const alex = new Person("Alex", 30);
console.log(alex.name, alex.age);


// Access Modifiers 

// 1. Encapsulation
class BankAccount {
    // accessible anywhere (default)
    public accountOwner : string;

    // accessible only inside this class
    private balance: number;

    // accessible in this class + subclasses 
    protected accountType: string;

    constructor(owner: string, initial: number){
        this.accountOwner = owner;
        this.balance = initial;
        this.accountType = "standard";
    }

    deposit(amount: number): void{
        this.balance += amount;
    }

    getBalance(): number{
        return this.balance;
    }
}

const acc = new BankAccount("Rishikesh", 1000);
// private values are accessed through getters.
console.log(acc.accountOwner, acc.getBalance())

// shorthand parameter and properties
class Product{
    // this auto-creates and assigns the three properties.
    constructor(public name: string, private price: number, readonly sku: string){}
}

const prod = new Product("Onion", 20, "on-123");
console.log(prod.name, prod.sku);

// GETTERS AND SETTERS
class Circle {
    private _radius : number;

    constructor(radius: number){
        this._radius = radius;
    }

    get radius():number{
        return this._radius;
    }

    set radius(value: number){
        if(value<=0) throw new Error("Radius must be positive")
        this._radius = value;
    }

    get area():number{
        return Math.PI * this._radius ** 2;
    }
}

const c = new Circle(5);
c.radius = 10 // calls the setter (set radius)  (setting to private modifiers)
console.log(c.area, c.radius);

// Static Members 
class MathUtils{
    static PI = 3.14159;
    static square(n:number): number{
        return n * n;
    }
}

// if the properties are static no need to create instance of the class
console.log(MathUtils.square(4));  // no instance needed
console.log(MathUtils.PI)


// INHERITANCE
class Animal {
    // protected properties are accessible inside the class and sub classes
    constructor(protected name: string){}

    makeSound() : string {
        return "Some generic sound";
    }
}

const dog = new Animal("vasu");
console.log(dog.makeSound()) // name not accessible inside the instances

class Dog extends Animal {
    constructor(name: string, private breed: string){
        super(name); // must call super() before using this ina subclass constructor
    }

    // method overriding
    makeSound(): string {
        // this.name is from the parent class (protected) can access in the subclass
        return `${this.name} says woof! ${this.breed}`;
    }
}

const d = new Dog("rex", "Pomerian");
console.log(d.makeSound());


// POLYMORPHISM
const animals: Animal[] = [new Animal("Generic"), new Dog("Rex", "Lab")];

animals.forEach(a => console.log(a.makeSound()))

// ABSTRACT CLASS
abstract class Shape{
    abstract area(): number; // no body - subclasses must implement this 

    describe(): string {
        return `This shape has area ${this.area()}`
    }
}

// child classes from Shape should implement the area function 
class Square extends Shape{
    constructor(private side : number){
        super();
    }

    area(): number {
        return this.side ** 2;
    }
}


const sq = new Square(4);
console.log(sq.describe(), sq.area())


// INTERFACES WITH CLASSES 
// this functions inside the interfaces should be implemented inside the class extends it
interface Flyable{
    fly(): void;
}

interface Swimmable{
    swim():void
}

class Duck implements Flyable, Swimmable{
    fly(): void {
        console.log("Flying")
    }
    swim(): void {
        console.log("swimming")
    }
}

const dk = new Duck();
dk.fly();
dk.swim();

// GENERICS IN CLASSES 
// used in case we dont know the exact types;
class Box<T>{
    private contents: T;
    constructor (value: T){
        this.contents = value;
    }

    getValue(): T { return this.contents}
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Rishi");

console.log(stringBox.getValue(), numberBox.getValue())

// A PRACTICAL PATTER : SINGLETON
// it allows only one time instance creation
class Logger {
    private static instance: Logger;
    private constructor() {}  // private constructor blocks new Logger() from outside

    static getInstance() : Logger {
        if(!Logger.instance) Logger.instance = new Logger();
        return Logger.instance;
    }

    log(msg: string){
        console.log(`[LOG]: ${msg}`);
    }
}

Logger.getInstance().log("App Started");
const logger = Logger.getInstance();

logger.log("Hwlloq")

abstract class Employee {
  constructor(protected name: string) {}

  abstract calculateSalary(): number; // subclasses MUST implement this differently

  describe(): string {
    return `${this.name} earns ${this.calculateSalary()}`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(
    name: string,
    private annualSalary: number
  ) {
    super(name);
  }

  calculateSalary(): number {
    return this.annualSalary / 12; // fixed monthly pay
  }
}

class ContractEmployee extends Employee {
  constructor(
    name: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked; // pay depends on hours worked
  }
}

const fEmp = new FullTimeEmployee("Rishikesh", 120000);
const cEmp = new ContractEmployee("Rishi", 50, 160);

console.log(fEmp.describe()); 
console.log(cEmp.describe());
