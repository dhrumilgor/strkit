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
  strKitReplace,
  generateRandomString,
  generateRandomNumber,
  concatWithSign,
  sumArray
} = require("@dhrumilgor/strkit");

// ES6
import {
  capitalizeFirst,
  reverseString,
  toCamelCase,
  capitalizeFirstWords,
  capitalizeAll,
  strKitReplace,
  generateRandomString,
  generateRandomNumber,
  concatWithSign,
  sumArray
} from "@dhrumilgor/strkit";

console.log(capitalizeFirst("hello world")); // "Hello world"
console.log(reverseString("hello")); // "olleh"
console.log(toCamelCase("hello-world")); // "helloWorld"
console.log(capitalizeFirstWords("hello world")); // "Hello World"
console.log(capitalizeAll("hello world")); // "HELLO WORLD"
console.log(strKitReplace("hello world","Hello","world")); // "Hello world"
console.log(generateRandomString()); // CzDtcOdJaK  - Default 10 length
console.log(generateRandomString(5)); // KlrsP
console.log(generateRandomNumber(100,1000)); // 999 - default 0,100
console.log(concatWithSign(["hello","world"],"-")); // hello-world 
console.log(sumArray([25,25,25,25])); // 100
```

## Features

✅ Lightweight & fast  
✅ Zero dependencies  
✅ Works in Node.js & browsers  
✅ Includes unit tests
