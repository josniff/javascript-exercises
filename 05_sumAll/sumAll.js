const sumAll = function(num1, num2) {

    let sum = 0;
    if (num1 < 0 || !Number.isInteger(num1) || typeof num2 != "number") {
        return 'ERROR';
    }
   else if (num1 < num2) {
    let i = num1;
    while (i <= num2) {
        sum += i;
        i++;
    };
} else {
    let i = num1;
    while (i >= num2) {
        sum += i;
        i--;
    };
} 
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
