function capitalizeFirst(str) {
    if (!str) {
        throw new Error("String is required.");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if (!str) {
        throw new Error("String is required.");
    }
    return str.split('').reverse().join('');
}

function toCamelCase(str) {
    if (!str) {
        throw new Error("String is required.");
    }
    return str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''));
}
function capitalizeAll(str) {
    if (!str) {
        throw new Error("String is required.");
    }
    return str.toUpperCase();
}

function capitalizeFirstWords(str) {
    if (!str) {
        throw new Error("String is required.");
    }
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function strKitReplace(str, find, replace) {
    if (!str || !find || !replace) {
        throw new Error("All parameters (str, find, replace) are required.");
    }
    return str.replace(find, replace);
}

function generateRandomString(length = 10) {
    if (isNaN(length)) {
        throw new Error("Invalid input: length must be numbers.");
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateRandomNumber(min = 0, max = 100) {
    min = Number(min);
    max = Number(max);
    
    if (isNaN(min) || isNaN(max)) {
        throw new Error("Invalid input: min and max must be numbers.");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function concatWithSign(array, sign = ' ') {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }
    return array.join(sign);
}

function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array');
    }
    return numbers.reduce((sum, num) => Number.isInteger(num) ? sum + num : sum, 0);
}

module.exports = { capitalizeFirst, reverseString, toCamelCase, capitalizeAll, capitalizeFirstWords, strKitReplace, generateRandomString, generateRandomNumber, concatWithSign,sumArray };