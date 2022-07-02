"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let user = [1, 'Shrey'];
user.push("New");
console.log("User data is ::", user);
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
;
let mySize = Sizes.Medium;
console.log("My size is >>--", mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
calculateTax(20000);
let employee = {
    id: 1, name: "Shrey", retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
let employee1 = {
    id: 1,
    name: 'Rajesh',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee1);
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { },
};
console.log(textBox);
let quantity = 100;
console.log(quantity);
let length = 'cm';
console.log(length);
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
let date = new Date();
console.log(date.getDate(), " ", date.getMonth(), ",", date.getFullYear());
let customer3 = getCustomer(3);
console.log((_a = customer3 === null || customer3 === void 0 ? void 0 : customer3.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('3');
function calAge(dob) {
    const currentDate = new Date();
    let dobArray = dob.split('/').map((string) => parseInt(string));
    let currentDateArray = [currentDate.getDay(), currentDate.getMonth(), currentDate.getFullYear()];
    let age = 0;
    age = currentDateArray[2] - dobArray[2];
    console.log("Age is>>", age, "years, ");
    return (age);
}
calAge("24/8/1995");
calAge("1/8/1997");
calAge("31/8/1999");
const printHelloFunction = (language) => {
    switch (language) {
        case 'eng':
            console.log("Hello");
            break;
        case 'fre':
            console.log("Bonjour");
            break;
        case 'jap':
            console.log("Kon'nichiwa");
            break;
        default:
            console.log("No supported language detected");
    }
};
printHelloFunction('eng');
printHelloFunction('fre');
printHelloFunction('jap');
//# sourceMappingURL=index.js.map