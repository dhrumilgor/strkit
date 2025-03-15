const { capitalize, reverseString, toCamelCase } = require('../index');

test('capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('convert to camel case', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('hello_world')).toBe('helloWorld');
});