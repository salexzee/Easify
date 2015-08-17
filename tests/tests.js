
// Testing for Easify.JS

// Dependencies: N/A

// Starts with semicolon to make sure it runs
;(function(){
  // Some variable setup
  var e = $E();
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run-tests-button');
  var tests = [];
  var testWord = "testing";
  var testSentence = "This is a test sentence.";
  var testNumber = 5;
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



  // ADDING TESTS
  // * set new text variable for every test
  // * if for passing test, else for failing test

  // This section is purposefully repetitive to make sure all
  // tests can be easily read and created. Stick to the provided
  // format.

  // Checks if capitalize() returns a string with the first letter capitalized
  tests.push(
    function() {
      var text = "capitalize() returns a new string with the first letter capitalized"
      if (e.capitalize(testWord) === 'Testing') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if isString() returns true
  tests.push(
    function() {
      var text = "isString() returns true if input value is of type 'string'";
      if (e.isString(testWord) === true) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if isString() returns false
  tests.push(
    function() {
      var text = "isString() returns false if input value is not of type 'string'";
      if (e.isString(testNumber) === false) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if last() returns the last letter of a string
  tests.push(
    function() {
      var text = "last() returns the last letter in a string";
      if (e.last(testWord) === 'g') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if remove() takes out the provided amount of letters
  tests.push(
    function() {
      var text = 'remove() returns a string with letters removed';
      if (e.remove(testWord, testNumber).length === testWord.length - testNumber ) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if removeAll() takes out all occurances of the provided letter
  tests.push(
    function() {
      var text = 'removeAll() returns a string with all of a specified letter removed';
      if (e.removeAll(testWord, 't') === 'esing') {
        testOutput(text, 'passed'); 
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if randomize() returns a string of the same length as the provided string
  tests.push(
    function() {
      var text = 'randomize() returns a string of the same length of the input string';
      if (e.randomize(testWord).length === testWord.length) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if randomize() returns a string that is not the same as the provided string
  // It is currently possible for the returned string to be
  // the same as the input string. The shorter the word,
  // the higher the chance of it being the same.
  // Using test sentence to lower the probability of returning
  // the same string.
  tests.push(
    function() {
      var text = 'randomize() returns a string that is not the same as the input word';
      if(e.randomize(testSentence) !== testSentence) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if repeat() returns the provided string repeated the specified amount of times
  tests.push(
    function() {
      var text = 'repeat() returns the provided string repeated the specified amount of times';
      if (e.repeat(testWord, 3) === 'testingtestingtesting') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if reverse() takes the provided string and returns a backwards copy
  tests.push(
    function() {
      var text = 'reverse() returns the provided string backwawrds';
      if (e.reverse(testWord) === 'gnitset') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if wrap() encapsulates the provided string in a provided HTML tag
  tests.push(
    function() {
      var text = 'wrap() encapsulates the provided string in a provided HTML tag';
      if (e.wrap(testWord, 'h1') === '<h1>testing</h1>') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Stop adding tests here

  // Assign runTests function to the button on the page
  testStartButton.onclick = runTests;
})();