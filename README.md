# TypeScript

What is TypeScript?

TypeScript is a superset of JavaScript, which means, it have all the features of vanilla JavaScript and it furthur adds more feature or syntax to JavaScript. One of the most comman type of error faced in JS is type error or type miss-match error. TypeScript tackles this problem by enforcing strict typing over any variable. Following example illustrates the point.


```JavaScript
// Accessing the property 'toLowerCase' on 'message' and then calling it:
message.toUpperCase();
// Calling 'message':
message();
```

In aforementioned example we are using a variable 'message' and we are performing two operations on it.
1. calling toUpperCase property from message and
2. calling message

Now if we declare the variable message as
```JavaScript
const message = "Hello"
```
We wont be able to call ' message() ' because a string is not callable.

To avoid such mistakes during runtime we use TypeScript. TypeScript adds an extra layer to our development process to prevent any such mistakes.
It allows us to strictly set the type of data type we want to accept for our varable.

An example of using type script would be:
```JavaScript
let message: string = "Hello";
message = "Olla";
message = 34;
```

While line 1 and 2 would work, line 3 will not be executed as it would have been in vanilla JS. By adding ": string" before variable decleration in line 1 we have fixed the datatype of variable 'message' to 'string', so while the message itself can change to another string, it is not possible to change it into another datatype.

Find some examples and detailed description at 
https://www.typescriptlang.org/docs/handbook/2/basic-types.html

For some hands on coding example with real side-by-side output visit
https://www.typescriptlang.org/play

Example of TypeScript in a function
```JavaScript
function greeter(person: string) {
  return "Hello, " + person;
}
```
The function defined above will only accept strings as input variable while other data type will fail.
```JavaScript
greeter("Hello There");
```
Will work since we are passing a 'string' as a datatype
```JavaScript
greeter(98);
```
Aforementioned function call on the other hand will fail as we are passing an 'int' while only 'strings' are acceptable

As seen from above example, TypeScript allows us to _fix in_, the acceptable datatypes for our function. Thus it will decrease bugs and errors that rise due to type mismatch error and allow us to control the data flow a lot better than vanilla JS.
If you are familiar with _'java' or 'c'_ varients you will find that the logic of type decleration is the same, and that is exactly what type script do.
It turns a loosely typed language like javascript into a strictly typed language like java thus making sure we do not have any type mismatch errors in our code.

#Why TypeScript Was Created?

Now since we have some idea about why should we use typescript lets talk about why the need for typescript arose in the first place.
To understand this we need to understand the history of its parent language, i.e. JavaScript.
