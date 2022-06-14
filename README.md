# TypeScript

What is TypeScript?

TypeScript is a superset of JavaScript, which means, it have all the features of vanilla JavaScript and it furthur adds more feature or syntax to JavaScript. One of the most comman type of error faced in JS is type error or type miss-match error. TypeScript tackles this problem by enforcing strict typing over any variable. Following example illustrates the point.

// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toUpperCase();

// Calling 'message'
message();

In aforementioned example we are using a variable 'message' and we are performing two operations on it.
1. calling toUpperCase property from message and
2. calling message

Now if we declare the variable message as 

const meassge = "Hello"

