var math = require('../modules/math');

module.exports = {
    test_add: function (test) {
        test.equal(math.add(1, 1), 2);
        test.done();
    },
    test_subtract: function (test) {
        test.equals(math.subtract(4,2), 2);
        test.done();
    }
}
