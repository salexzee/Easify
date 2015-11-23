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

    it('string() should return true if the argument is of type string', function() {
      assert.isTrue(e.string('Hello'));
    });

    it('string() should return false if the argument is not of type string', function() {
      assert.isFalse(e.string(4));
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

    it('has() should return true if the provided array contains the specified value', function() {
      assert.isTrue(e.has(['hello', 'world'], 'world'));
    });

    it('has() should return false if the provided array does not contain the specified value', function() {
      assert.isFalse(e.has(['hello', 'world'], 'city'));
    });

    it('array() should return true if argument is of type array', function() {
      assert.isTrue(e.array(['hello', 'world']));
    });

    it('array() should return false if argument is not of type array', function() {
      assert.isFalse(e.array('hello world'));
    });

    it('parlay() should return the provided array with the non-specified indexes removed', function() {
      assert.deepEqual(e.parlay(['hello', 'world', 'city'], [0, 1]), ['hello', 'world']);
    });

    it('removeItem() should return the input array with the specified index removed', function() {
      assert.deepEqual(e.removeItem(['hello', 'world', 'city'], 2), ['hello', 'world']);
    });

    it('shuffle() should return an array of the same length as the provided array', function() {
      assert.lengthOf(e.shuffle(['hello', 'world', 'this', 'is', 'it']), 5);
    }); 

    it('stray() should return a random value from the provided array', function() {
      assert.isString(e.stray(['hello', 'world', 'this', 'is', 'it']));
    });

    it('search() should return a new array of strings with matching chr sequence from input string.', function (){
      var food = ['ham', 'potatos', 'spam', 'jam', 'chicken'];
      assert.deepEqual(e.search(food, 'am'), ['ham', 'spam', 'jam']);
    });
  });

  describe('Object Methods', function() {
    it('clear() should empty all properties and methods from an object', function() {
      var obj = {name: 'Sam', show: function(){return this.name}};
      e.clear(obj);
      assert.deepEqual(obj, {});
    });

    it('combine() should combine 2 objects into one', function() {
      assert.deepEqual(e.combine({name: 'Sam'}, {age: 27}), {name: 'Sam', age: 27})
    });

    it('drop() should remove the keys specified in the array', function() {
      var obj = {name: 'Sam', age: 27};
      e.drop(obj, ['age']);
      assert.deepEqual(obj, {name: 'Sam'});
    });

    it('isObject() should return true if input is an object', function() {
      assert.isTrue(e.isObject({name: 'Sam'}));
    });

    it('isObject() should return false if input is not an object', function() {
      assert.isFalse(e.isObject('Sam'));
    });
  });

  describe('Universal Methods', function() {

  });

  describe('Number Methods', function() {

  });
});
