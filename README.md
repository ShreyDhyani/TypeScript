# TypeScript

What is TypeScript?

TypeScript is a superset of JavaScript, which means, it have all the features of vanilla JavaScript and it furthur adds more feature or syntax to JavaScript. One of the most comman type of error faced in JS is type error or type miss-match error. TypeScript tackles this problem by enforcing strict typing over any variable. Following example illustrates the point.

// Accessing the property 'toLowerCase' on 'message' and then calling it:

message.toUpperCase();

// Calling 'message':

message();

In aforementioned example we are using a variable 'message' and we are performing two operations on it.
1. calling toUpperCase property from message and
2. calling message

Now if we declare the variable message as 

const message = "Hello"

We wont be able to call ' message() ' because a string is not callable.

To avoid such mistakes during runtime we use TypeScript. TypeScript adds an extra layer to our development process to prevent any such mistakes.
It allows us to strictly set the type of data type we want to accept for our varable.

An example of using type script would be:

1 let message: string = "Hello";
2 message = "Olla";
3 message = 34;

While line 1 and 2 would work, line 3 will not be executed as it would have been in vanilla JS. By adding ": string" before variable decleration in line 1 we have fixed the datatype of variable 'message' to 'string', so while the message itself can change to another string, it is not possible to change it into another datatype.

Find some examples and detailed description at 
https://www.typescriptlang.org/docs/handbook/2/basic-types.html

For some hands on coding example with real side-by-side output visit
https://www.typescriptlang.org/play


#TypeScript's Type System
