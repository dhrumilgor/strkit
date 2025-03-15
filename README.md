# strkit - String Utilities

🚀 `strkit` is a lightweight JavaScript utility library for common string operations like capitalization, reversing, and camel case conversion.

## Installation

```sh
npm install @dhrumilgor/strkit
```

## Usage

```javascript
const {
  capitalizeFirst,
  reverseString,
  toCamelCase,
  capitalizeFirstWords,
  capitalizeAll,
} = require("@dhrumilgor/strkit");

// ES6
import {
  capitalizeFirst,
  reverseString,
  toCamelCase,
  capitalizeFirstWords,
  capitalizeAll,
} from "@dhrumilgor/strkit";

console.log(capitalizeFirst("hello world")); // "Hello world"
console.log(reverseString("hello")); // "olleh"
console.log(toCamelCase("hello-world")); // "helloWorld"
console.log(capitalizeFirstWords("hello world")); // "Hello World"
console.log(capitalizeAll("hello world")); // "HELLO WORLD"
```

## Features

✅ Lightweight & fast  
✅ Zero dependencies  
✅ Works in Node.js & browsers  
✅ Includes unit tests
