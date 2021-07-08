exports.min = function min(array) {
    return arguments.length > 0
        ? array.length > 0
            ? array.reduce((a, b) => (a < b ? a : b))
            : 0
        : 0;
};

exports.max = function max(array) {
    return arguments.length > 0
        ? array.length > 0
            ? array.reduce((a, b) => (a > b ? a : b))
            : 0
        : 0;
};

exports.avg = function avg(array) {
    return arguments.length > 0
        ? array.length > 0
            ? array.reduce((a, b) => a + b) / array.length
            : 0
        : 0;
};
