var assert = require('chai').assert;
require('../easify');
var e = global.Easify();

describe('Easify', function() {
  describe('Overall', function () {
    it('should check if easify exists', function() {
      assert.typeOf(e, 'object');
    });
  });

  describe('String Methods', function() {
    it('should capitalize the first letter of the input string', function() {
      assert.equal(e.cap('hello'), 'Hello');
    });

    it('should lower case all letters in the input string', function() {
      assert.equal(e.downcase('HELLO'), 'hello');
    });
  });
});
