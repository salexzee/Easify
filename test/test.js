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
      assert.strictEqual(e.cap('hello'), 'Hello');
    });

    it('should lower case all letters in the input string', function() {
      assert.strictEqual(e.downcase('HELLO'), 'hello');
    });

    it('should check if the argument is of type string', function() {
      assert.isTrue(e.string('Hello'));
    });

    it('should return the last letter of the string argument', function() {
      assert.strictEqual(e.last('hello'), 'o');
    });

    it('should return a string of characters as long as the specified argument', function() {
      assert.lengthOf(e.password(12), 12);
    });

    it('should remove the specified amount of characters from the provided string', function() {
      assert.lengthOf(e.remove('hello', 2), 3);
    });
  });
});
