// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = false;
// let color = "red"; // Infered type
// let number: number[] = [1, 2, 3];

// number.forEach(n => {
//   n.toExponential();
//   console.log("Some Data is here>>>", typeof n);
// })

//Example of a tuple
let user: [number, string] = [1, 'Shrey']
user.push("New"); //Bug in typescript
console.log("User data is ::", user);

// function render(document) {
//   console.log(document);
// }

//Enum in typescript
//Pascal Naming convention
enum Sizes { Small = 1, Medium, Large };
let mySize: Sizes = Sizes.Medium;
console.log("My size is >>--", mySize);

//Functions
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000, 2022);
calculateTax(20_000);

//Objects
let employee: {
  readonly id: number,
  name: string,
  retire: (date: Date) => void,
} = {
  id: 1, name: "Shrey", retire: (date: Date) => {
    console.log(date);
  }
};

console.log(employee);

// Advanced Types  

// Type aliases

type Employee = {
  readonly id: number,
  name: string,
  retire: (date: Date) => void,
}

let employee1: Employee = {
  id: 1,
  name: 'Rajesh',
  retire: (date) => {
    console.log(date);
  }
}

console.log(employee1);

//Union Types

function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else
    return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

//Intersection Types
type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => { },
  resize: () => { },
}

console.log(textBox);

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
console.log(quantity);

type Metric = 'cm' | 'inch';
let length: Metric = 'cm';
console.log(length);

//Nullable Types
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else
    console.log("Hola");
}
greet(null);

//Optional Chaining
type Customer = {
  birthday?: Date,
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday);

let customer2 = getCustomer(1);
console.log(customer2?.birthday);

let date: Date = new Date();
console.log(date.getDate(), " ", date.getMonth(), ",", date.getFullYear());

let customer3 = getCustomer(3);
console.log(customer3?.birthday?.getFullYear());

//Optional element access operator
// customers?.[0]

//Optional call
let log: any = null;
log?.('3');//Only called if log is a function

//Function examples
function calAge(dob: string): number {
  const currentDate = new Date();
  let dobArray = dob.split('/').map((string) => parseInt(string));
  let currentDateArray = [currentDate.getDay(), currentDate.getMonth(), currentDate.getFullYear()];

  let age: number = 0;

  age = currentDateArray[2] - dobArray[2];

  console.log("Age is>>", age, "years, ");
  return (age);
}

calAge("24/8/1995");
calAge("1/8/1997");
calAge("31/8/1999");

const printHelloFunction = (language: 'eng' | 'fre' | 'jap'): void => {
  switch (language){
    case 'eng':
      console.log("Hello");
      break;
    case 'fre':
      console.log("Bonjour");
      break;
    case 'jap':
      console.log("Kon'nichiwa");
      break;
    default :
      console.log("No supported language detected");
  }
}

printHelloFunction('eng');
// printHelloFunction('Jap'); Will not work as jap in case sensitive
printHelloFunction('fre');
printHelloFunction('jap');


//Function with properties and call signature
// type performCheck = {
//   description: string;
//   (integerValue: number): boolean;
// }
// function doSomething(fn: performCheck) {
//   console.log(fn.description + " returned " + fn(6));
// }

// let oddChecker: performCheck = {
//   description: "Check if the number is odd"
// }

// doSomething(oddChecker);






export { }