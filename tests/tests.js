
// Testing for Easify.JS

// Extra Dependencies: N/A

// Starts with semicolon to make sure it runs
;(function(){
  // Some variable setup
  var e = $E();
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run-tests-button');
  var tests = [];
  var passed = 0; // Set for future use
  var failed = 0; // Set for future use

  // Runs all tests
  function runTests() {
    checkBlock.innerHTML = '';
    for (var i = 0; i < tests.length; i++) {
      tests[i]();
    }
    console.log('Tests run!');
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
    } else {
      testOutput(text, 'failed');
    }
  }



  // ADDING TESTS
  // * set new text variable for every test
  // * runTest(comparison, text);

  // Stick to the provided format.

  // Checks if capitalize() returns a string with the first letter capitalized
  tests.push(
    function() {
      var text = "capitalize() returns a new string with the first letter capitalized"
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
  )

  // Stop adding tests here

  // Assign runTests function to the button on the page
  testStartButton.onclick = runTests;
})();