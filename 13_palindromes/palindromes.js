const palindromes = function (arr) {
    const regex = /[^A-Za-z0-9]/g;
    const cleaned = arr.toLowerCase().replace(regex, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
