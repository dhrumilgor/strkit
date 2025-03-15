function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function toCamelCase(str) {
    return str.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''));
}
function capitalizeAll(str) {
    return str.toUpperCase();
}

function capitalizeFirstWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

module.exports = { capitalizeFirst, reverseString, toCamelCase,capitalizeAll,capitalizeFirstWords };