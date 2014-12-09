var test = require('tape');
var router = require('../router.js')
test('more info', function (t) {
      t.plan(2);

          t.equal(1+2, 3, 'basic arithmetic still works');
              t.ok(3+4>5, 'inequalities are as we might expect');
});
module.exports = test