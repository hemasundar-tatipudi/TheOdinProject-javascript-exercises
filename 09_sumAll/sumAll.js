const sumAll = function(small,large) {
    if (small<0 || large<0 || !Number.isInteger(small) || !Number.isInteger(large)) {
        return "ERROR";
    }
    if (small>large) {
        [small,large] = [large,small]
    }

    let sum=0;
    for (let i=small;i<=large;i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
