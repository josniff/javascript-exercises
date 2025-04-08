const removeFromArray = function(num, ...args) {

    return num.filter(x => !args.includes(x));

}

// Do not edit below this line
module.exports = removeFromArray;
