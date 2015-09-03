
// Testing for Easify.JS

// Extra Dependencies: N/A

// Starts with semicolon to make sure it runs
;(function(){
  // Some variable setup
  var e = $E();
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run-tests-button');
  var tests = [];
  var passed = 0;
  var failed = 0;

  // Runs all tests
  function runTests() {
    checkBlock.innerHTML = '';
    passed = 0;
    failed = 0;
    for (var i = 0; i < tests.length; i++) {
      tests[i]();
    }
    console.log('Tests run!');
    console.log(passed + ' passed - ' + failed + ' failed');
  }

  // Creates the output for the tests
  function testOutput(text, check) {
    checkBlock.innerHTML += '<p>' + text + ': <span class="' + check + '">' + e.capitalize(check) + '!</span></p>';
  }

  // Pulls if/else functionality from tests to make them
  // easier to work with
  // Comparison will evaluate to true or false which will
  // then be the deciding factor on whether the test
  // passes or fails.
  function runTest(comparison, text) {
    if(comparison) {
      testOutput(text, 'passed');
      passed += 1;
    } else {
      testOutput(text, 'failed');
      failed += 1;
    }
  }



  // ADDING TESTS
  // * set new text variable for every test
  // * runTest(comparison, text);

  // Stick to the provided format.

  // Checks if capitalize() returns a string with the first letter capitalized
  tests.push(
    function() {
      var text = "capitalize() returns a new string with the first letter capitalized";
      runTest(e.capitalize('testing') === 'Testing', text);
    }
  );

  // Checks if isString() returns true
  tests.push(
    function() {
      var text = "isString() returns true if input value is of type 'string'";
      runTest(e.isString('testing') === true, text);
    }
  );

  // Checks if isString() returns false
  tests.push(
    function() {
      var text = "isString() returns false if input value is not of type 'string'";
      runTest(e.isString(5) === false, text);
    }
  );

  // Checks if last() returns the last letter of a string
  tests.push(
    function() {
      var text = "last() returns the last letter in a string";
      runTest(e.last('testing') === 'g', text);
    }
  );

  // Checks if remove() takes out the provided amount of letters
  tests.push(
    function() {
      var text = 'remove() returns a string with letters removed';
      runTest(e.remove('testing', 5).length === 'testing'.length - 5, text);
    }
  );

  // Checks if removeAll() takes out all occurances of the provided letter
  tests.push(
    function() {
      var text = 'removeAll() returns a string with all of a specified letter removed';
      runTest(e.removeAll('testing', 't') === 'esing', text);
    }
  );

  // Checks if randomize() returns a string of the same length as the provided string
  tests.push(
    function() {
      var text = 'randomize() returns a string of the same length of the input string';
      runTest(e.randomize('testing').length === 'testing'.length, text);
    }
  );

  // Checks if randomize() returns a string that is not the same as the provided string
  // It is currently possible for the returned string to be
  // the same as the input string. The shorter the word,
  // the higher the chance of it being the same.
  // Using a sentence to lower the probability of returning
  // the same string.
  tests.push(
    function() {
      var text = 'randomize() returns a string that is not the same as the input word';
      runTest(e.randomize("This is a test sentence.") !== "This is a test sentence.", text);
    }
  );

  // Checks if repeat() returns the provided string repeated the specified amount of times
  tests.push(
    function() {
      var text = 'repeat() returns the provided string repeated the specified amount of times';
      runTest(e.repeat('testing', 3) === 'testingtestingtesting', text);
    }
  );

  // Checks if reverse() takes the provided string and returns a backwards copy
  tests.push(
    function() {
      var text = 'reverse() returns the provided string backwawrds';
      runTest(e.reverse('testing') === 'gnitset', text);
    }
  );

  // Checks if wrap() encapsulates the provided string in a provided HTML tag
  tests.push(
    function() {
      var text = 'wrap() encapsulates the provided string in a provided HTML tag';
      runTest(e.wrap('testing', 'h1') === '<h1>testing</h1>', text);
    }
  );

  // insertHTML() not tested

  //Checks if isEqual() returns true when 2 arguments are strictly equal
  tests.push(
    function() {
      var text = 'isEqual() returns true when 2 arguments are strictly equal';
      runTest(e.isEqual(5, 5) === true, text);
    }
  );

  //Checks if isEqual() returns false when 2 arguments are equal, but not strictly equal
  tests.push(
    function() {
      var text = 'isEqual() returns false when 2 arguments are not strictly equal';
      runTest(e.isEqual(5, '5') === false, text);
    }
  );

  // Checks if isNotEqual returns true when 2 arguments are equal, but not strictly equal
  tests.push(
    function() {
      var text = 'isNotEqual() returns true when 2 arguments are not strictly equal';
      runTest(e.isNotEqual(5, '5') === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isNotEqual() returns false when 2 arguments are strictly equal';
      runTest(e.isNotEqual(5, 5) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isSimilar() returns true when 2 arguments are equal, but not strictly equal';
      runTest(e.isSimilar(5, '5') === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isSimilar() returns false when 2 arguments are not equal';
      runTest(e.isSimilar(5, 4) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isNotSimilar() returns true when 2 arguments are not equal';
      runTest(e.isNotSimilar(5, 4) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isNotSimilar() returns false whe 2 arguments are equal';
      runTest(e.isNotSimilar(5, 5) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isTruthy() returns true when value is truthy';
      runTest(e.isTruthy(5) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isTruthy() returns false when value is falsey';
      runTest(e.isTruthy(0) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isFalsey() returns true when value is falsey';
      runTest(e.isFalsey(0) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isFalsey() returns false when value is truthy';
      runTest(e.isFalsey(5) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "array" when an array is passed in';
      runTest(e.checkType([]) === 'array', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "object" when an object is passed in';
      runTest(e.checkType({}) === 'object', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "string" when a string value is passed in';
      runTest(e.checkType('test') === 'string', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "boolean" when a boolean value is passed in';
      runTest(e.checkType(false) === 'boolean', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "function" when a function is passed in';
      runTest(e.checkType(function(){}) === 'function', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "null" when null is passed in';
      runTest(e.checkType(null) === 'null', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "undefined" when undefined is passed in';
      runTest(e.checkType(undefined) === 'undefined', text);
    }
  );

  tests.push(
    function() {
      var text = 'checkType() returns "undefined" when nothing is passed in';
      runTest(e.checkType() === 'undefined', text);
    }
  );

  tests.push(
    function() {
      var text = 'isObject() returns true if passed in value is an object';
      runTest(e.isObject({}) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isObject() returns false if an array is passed in';
      runTest(e.isObject([]) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isObject() returns false if null is passed in';
      runTest(e.isObject(null) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'isArray() returns true if an array is passed in';
      runTest(e.isArray([]) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'isArray() returns false if an object is passed in';
      runTest(e.isArray({}) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'contains() returns true if the passed in value is inside of the passed in array';
      runTest(e.contains([1,2,3], 3) === true, text);
    }
  );

  tests.push(
    function() {
      var text = 'contains() returns false if the passed in value is not inside of the passed in array';
      runTest(e.contains([1,2,3], 4) === false, text);
    }
  );

  tests.push(
    function() {
      var text = 'multiply() returns the product of the provided numbers';
      runTest(e.multiply(5,5) === 25, text)
    }
  );

  tests.push(
    function() {
      var text = 'divide() returns the quotient of the provided numbers';
      runTest(e.divide(6,3) === 2, text)
    }
  );

  tests.push(
    function() {
      var text = 'isNum() returns true if input is of type "number"';
      runTest(e.isNum(4) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isNum() returns false if input is not of type "number"';
      runTest(e.isNum('4') === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'isOdd() returns true if input number is odd';
      runTest(e.isOdd(5) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isOdd() returns false if input number is even';
      runTest(e.isOdd(4) === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'isEven() returns true if input number is even';
      runTest(e.isEven(4) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isEven() returns false if input number is not even';
      runTest(e.isEven(5) === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'randNum() returns a number from 1 to the input value';
      var num = e.randNum(3);
      runTest((num === 1) || (num === 2) || (num === 3), text);
    }
  );

  tests.push(
    function() {
      var text = 'randNumBetween() returns a number from the higher value number to the lower value number';
      var num = e.randNumBetween(1,3);
      runTest((num === 1) || (num === 2) || (num === 3), text);
    }
  );
  
    tests.push(
    function() {
      var text = 'multiply() returns the product of the provided numbers';
      runTest(e.multiply(5,5) === 25, text)
    }
  );

  tests.push(
    function() {
      var text = 'divide() returns the quotient of the provided numbers';
      runTest(e.divide(6,3) === 2, text)
    }
  );

  tests.push(
    function() {
      var text = 'isNum() returns true if input is of type "number"';
      runTest(e.isNum(4) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isNum() returns false if input is not of type "number"';
      runTest(e.isNum('4') === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'isOdd() returns true if input number is odd';
      runTest(e.isOdd(5) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isOdd() returns false if input number is even';
      runTest(e.isOdd(4) === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'isEven() returns true if input number is even';
      runTest(e.isEven(4) === true, text)
    }
  );

  tests.push(
    function() {
      var text = 'isEven() returns false if input number is not even';
      runTest(e.isEven(5) === false, text)
    }
  );

  tests.push(
    function() {
      var text = 'randNum() returns a number from 1 to the input value';
      var num = e.randNum(3);
      runTest((num === 1) || (num === 2) || (num === 3), text);
    }
  );

  tests.push(
    function() {
      var text = 'randNumBetween() returns a number from the higher value number to the lower value number';
      var num = e.randNumBetween(1,3);
      runTest((num === 1) || (num === 2) || (num === 3), text);
    }
  );

  // Stop adding tests here

  // Assign runTests function to the button on the page
  testStartButton.onclick = runTests;
})();
