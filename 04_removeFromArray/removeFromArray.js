// removes a single value
const removeFromArray = function(num, index) {
    num.splice (index - 1, 1);
    return num; 
};

// Do not edit below this line
module.exports = removeFromArray;