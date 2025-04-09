const leapYears = function(year) {
    result = year % 4;
    if (result === 0 && result != year % 10 || result === year % 400){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
