const { capitalizeFirst, reverseString, toCamelCase,capitalizeFirstWords,capitalizeAll } = require('../index');

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