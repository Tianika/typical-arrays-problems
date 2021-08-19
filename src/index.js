exports.min = function min(array) {
    if (array) {
        return array.length > 0 ? array.sort((a, b) => a - b)[0] : 0;
    }
    return 0;
};

exports.max = function max(array) {
    if (array) {
        return array.length > 0 ? array.sort((a, b) => b - a)[0] : 0;
    }
    return 0;
};

exports.avg = function avg(array) {
    if (array) {
        return array.length > 0
            ? array.reduce((sum, item) => sum + item) / array.length
            : 0;
    }
    return 0;
};
