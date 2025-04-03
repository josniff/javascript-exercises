// does not use the built-in string repeat method
const repeatString = function (string, num) {
    let longString = "";
    let i = 0;
    while (i < num) {
        longString += "hi";
        ++i;
    };
    return longString;
};  





// 3 times, add the 'hey' to the end of the string
// then, take the long string (heyheyhey) and return it to the caller

// Do not edit below this line
module.exports = repeatString;
