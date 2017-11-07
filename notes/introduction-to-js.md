
The skill of programming therefore has two steps... 

1. programming is finding solutions to problems; 
2. programming is implementing those solutions in a particular programming language such that your computer can understand and execute your solution.

### The Fibonacci sequence

The [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) describes a sequence of numbers in which each number in the list is the sum of the previous two (with the exception of the first two numbers in the list, 0 and 1).

-The first six numbers in the Fibonacci sequence are: 0, 1, 1, 2, 3, 5.

The algorithm — or set of instructions — to produce the Fibonacci numbers is as follows..

1. Define an integer value, n. n determines the length of the list of Fibonacci numbers output by the algorithm.

2. Set the first two items in the resulting list to 0 and 1 respectively.

3. For a remaining n - 2 times (n - 2 because the first two slots in the Fibonacci sequence are taken by 0 and 1. We're assuming n > 2), compute the next item in the list by adding the previous two.

4.When the list's length is equal to n, we're done.

- When you're programming, sometimes you must invent algorithms, and other times you implement existing ones. Most of the time, you're doing a bit of both.

Suppose we want to create a simple interface that visually displays the Fibonacci sequence to users. The user should be able to tell us how long of a list of Fibonacci numbers to display. After they input their answer, the interface should compute and display a sequence of the correct length.

This user experience can be broken down into three distinct moments...

- getting the number of results to compute from the user
- computing an n-length list of Fibonacci numbers
- displaying that list of numbers


this is a function. it's a named set of instructions that you can call elsewhere in your code. this function is called `generateFib` and when you call it, you pass it a number (`num`)

```
function generateFib(num) {
  // this creates an empty array.
  // you'll learn about arrays later
  // in this course
  const result = []; 
  // this is called a *for loop*.
  // a for loop executes a block of 
  // instructions a set number of 
  // times. this loop will execute
  // however many times the `num`
  // variable says to do.
  for (let i = 1; i <= num; i++) {
    // here between the { } brackets
    // are the set of instructions
    // that get completed each time
    // through the for loop.
    // this particular set of
    // instructions says that if
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }
    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
```

```
function getFibListLength() {
  // we're stubbing this function,
  // which means having it return a
  // temporary, hard-coded value
  // that is representative of a 
  // typical value this function
  // might return. That way we can 
  // focus on implementing the 
  // unique part of this problem:
  // generating Fibonacci numbers
  return 20;
}
```

this function is responsible for displaying Fibonacci numbers in the DOM. It appends each result item as a separate `<p>` element

```
function displayFibs(fibs) {
  const mainEl = document.getElementsByTagName('main')[0];
  for (let i=0; i < fibs.length; i++) {
    console.log(fibs[i]);
    const newEl = document.createElement('p');
    newEl.innerText = fibs[i];
    mainEl.appendChild(newEl);
  }
}
```

we define a `main` function that is responsible for calling the three other functions we called, in the right order, and routing outputs from one function into another.

```
function main() {
  const fibLimit = getFibListLength();
  const fibs = generateFib(fibLimit);
  displayFibs(fibs);
}
```
once the page has fully loaded, the function between the `()` parens runs. you'll learn more about this later.

` $(main); `

The architecture of this program (three distinct functions -- generateFib, getFibListLength, and displayFibs — which are together called by the main function) reflects the way we broke down our problem in plain language before beginning to code ("We need a way to determine how long the list should be", "We need a way to generate a list of Fibonacci numbers up to a certain length", "We need a way to display the list to a user").

Programmers by definition must master one or more programming languages, but this ability to move from high level language to a clear set of instructions, and from there to implementing the instructions using clean code — that is the key skill of the programmer.

Your goal in the remainder of this course is to become literate with JavaScript and to develop this more difficult skill of being a good programmer.

### What is JavaScript?

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) is one of many programming languages, but it’s the only one available in all modern browsers.

What you do with JavaScript in the browser can be broken down into two categories... 

1. modeling and manipulating data and processes... 
2. interacting with browser elements (which are represented using HTML).

The part of JavaScript that deals with modeling and manipulating data — that is, using variables, constants, strings, numbers, logic, functions, etc. — is specified by [ECMA -the European Association for Standardizing Information and Communication Systems](http://www.ecma-international.org/memento/history.htm). This organization creates the ECMAscript specification, which is a description of what a language called ECMAscript should implement.

Here's (part of) what the [ECMA 6 spec states is the behavior of string literals](https://www.ecma-international.org/ecma-262/6.0/#sec-literals-string-literals), which is a term that refers to representing strings in JavaScript by using the syntax: "foo bar" or 'foo bar':

> A string literal is zero or more Unicode code points enclosed in single or double quotes. Unicode code points may also be represented by an escape sequence. 
> All code points may appear literally in a string literal except for the closing quote code points, U+005C (REVERSE SOLIDUS), U+000D (CARRIAGE RETURN), U+2028 (LINE SEPARATOR), U+2029 (PARAGRAPH SEPARATOR), and U+000A (LINE FEED). 
> Any code points may appear in the form of an escape sequence. String literals evaluate to ECMAScript String values...

Each individual browser is responsible for implementing the JavaScript spec. For instance, [v8, the JavaScript interpreter used by Google Chrome](https://github.com/v8/v8), is written in c++, and implements the set of features from the spec, listed [here](http://kangax.github.io/compat-table/es5/). 

-The JavaScript interpreter is responsible for translating your JavaScript code into instructions the Chrome browser can execute.

In this curriculum, we'll use version 5 features plus a subset of features from version 6 of ECMAscript.

When considering whether or not to use newer language features in your code, resources like [caniuse.com](https://caniuse.com/) can help you understand which browsers support the feature.

The part of JavaScript that deals with interacting with HTML elements — called the DOM (document object model) API, which we'll cover in unit 3 of this course — is specified by the [W3C - (World Wide Web Consortium)](https://www.w3.org/DOM/), which is the same organization that creates the specification for HTML.

The key take away for you is this: what JavaScript is gets specified by the ECMA and W3C specs. Individual browsers handle the how of implementing the ECMA and W3C specifications. As a programmer, your experience of using JavaScript on any particular browser is — for the most part — uniform. But behind the scenes, that JavaScript is getting interpreted by a browser that may support all, or only a subset of the features and requirements listed in a version of the ECMA and W3C specs.

### Getting Scripts into a web Page

Here's an example of putting JS code directly in HTML:

```
<!DOCTYPE html>
<html lang="en">
<body>
  <script>
    function main() {
      const message = "Hello world from JS!";
      console.log(message);
      alert(message);
    };
    main();
  </script>
</body>
</html>
```

Unless you have a specific reason to store your JS directly in your HTML, always put it in a separate file. Here's the same example we just saw, but with the JavaScript in an external file.

index.html
```
<!DOCTYPE html>
<html lang="en">
<body>
  <script src="app.js"></script>
</body>
</html>
```
app.js
```
function main() {
      const message = "Hello world from JS!";
      console.log(message);
      alert(message);
};
main();
```
Note that you can add multiple script elements to your HTML. Later in this course when we start to work with jQuery (a third party JavaScript library), we'll link to jQuery in one script element, and below that, we'll link to our application code.
```
<!DOCTYPE html>
<html lang="en">
<body>
  <script src="https://www.somewhere-on-the-internet.com/coolLibrary.js"></script>
  <script src="app.js"></script>
</body>
</html>
```
It's important to understand that when a browser reads in an HTML file, it goes top to bottom, left to right. That means that the order of your script elements matters. If you have one script that relies on another one being loaded, that script should appear above it in your HTML.

### Variable Basics
