const repeatString = function(str,n) {
    if (n<0) {
        return "ERROR";
    }
    let repeat = '';
    for (let i=0; i<n; i++){
        repeat += str; 
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
