// repeats the string a random amount of times
const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let longString = "";
    let i = 0;
    while (i < num) {
        longString += "hey";
        ++i;
    };
    return longString;
};  





// 3 times, add the 'hey' to the end of the string
// then, take the long string (heyheyhey) and return it to the caller

// Do not edit below this line
module.exports = repeatString;
