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
    it('cap() should capitalize the first letter of the input string', function() {
      assert.strictEqual(e.cap('hello'), 'Hello');
    });

    it('downcase() should lower case all letters in the input string', function() {
      assert.strictEqual(e.downcase('HELLO'), 'hello');
    });

    it('string() should check if the argument is of type string', function() {
      assert.isTrue(e.string('Hello'));
    });

    it('last() should return the last letter of the string argument', function() {
      assert.strictEqual(e.last('hello'), 'o');
    });

    it('password() should return a string of characters as long as the specified argument', function() {
      assert.lengthOf(e.password(12), 12);
    });

    it('remove() should remove the specified amount of characters from the provided string', function() {
      assert.lengthOf(e.remove('hello', 2), 3);
    });

    it('removeAll() should remove all of the specified letters from the provided string', function() {
      assert.lengthOf(e.removeAll('hello', 'l'), 3);
    });

    it('randomize() should return a random sequence of characters from the provided string', function() {
      assert.notStrictEqual(e.randomize('hello world, this is a sentence'), 'hello world, this is a sentence');
    });

    it('randomcase() should return a the input string with a random case for each character', function() {
      assert.notStrictEqual(e.randomcase('hello world, this is a sentence'), 'hello world, this is a sentence');
    });

    it('repeat() should take a string and repeat it the specified amount of times', function() {
      assert.strictEqual(e.repeat('hello', 3), 'hellohellohello');
    });

    it('reverse() should take a string and return it backwards', function() {
      assert.strictEqual(e.reverse('hello'), 'olleh');
    });

    it('trim() should remove extra white space from the beginning and end of a string', function() {
      assert.strictEqual(e.trim(' hello '), 'hello');
    });

    it('upcase() should take a string and uppercase all of the letters', function() {
      assert.strictEqual(e.upcase('hello'), 'HELLO');
    });

    it('format() should take a string and replace the placeholders with the values in the provided object', function() {
      assert.strictEqual(e.format('hello {w}', {w: 'world'}), 'hello world');
    });

    it('wrap() should wrap the provided string in a specified HTML styled element', function() {
      assert.strictEqual(e.wrap('hello', 'div'), '<div>hello</div>');
    });
  });

  describe('Array Methods', function() {
    it('bridge() should return a combined version of the 2 input arrays', function(){
      assert.deepEqual(e.bridge(['hello'], ['world']), ['hello', 'world']);
    });

    it('unify() should return a combined version of the 2 input arrays omitting duplicate strings', function() {
      assert.deepEqual(e.unify(['hello', 'world'], ['world']), ['hello', 'world']);
    });

    it('checkTypes() should return an array of all the types contained in the input array', function() {
      assert.deepEqual(e.checkTypes(['hello', 4, {name: 'John Doe'}]), ['string', 'number', 'object']);
    });
  });
});
