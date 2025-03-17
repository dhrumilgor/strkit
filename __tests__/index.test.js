const { capitalizeFirst, reverseString, toCamelCase,capitalizeFirstWords,capitalizeAll, strKitReplace, generateRandomString, generateRandomNumber, concatWithSign,sumArray  } = require('../index');

test('capitalize first letter', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('convert to camel case', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('hello_world')).toBe('helloWorld');
});

test('capital whole string', () => {
    expect(capitalizeAll('hello')).toBe('HELLO');
});

test('capitalize first words', () => {
    expect(capitalizeFirstWords('hello world')).toBe('Hello World');
});

test('find string and replace', () => {
    expect(strKitReplace('hello world', 'hello', 'Hello')).toBe('Hello world');
});

test('generate random string', () => {
    const randomStr = generateRandomString();

    expect(typeof randomStr).toBe('string'); // Ensure it's a string
    expect(randomStr.length).toBe(10); // Default length should be 10
    expect(randomStr).toMatch(/^[A-Za-z0-9]+$/); // Ensure it only contains alphanumeric characters
});

test('generate random number', () => {
    const randomNum = generateRandomNumber(100,1000);
   
    expect(typeof randomNum).toBe('number');
    expect(randomNum).toBeGreaterThanOrEqual(100);
    expect(randomNum).toBeLessThanOrEqual(1000);
});

test('concat array with sign', () => {
    expect(concatWithSign(['hello','world'],"-")).toBe("hello-world");
});

test('sum of value of array', () => {
    expect(sumArray([5,5,5])).toBe(15);
});