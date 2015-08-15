;(function(){
  // Some variable setup
  var e = $E();
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run-tests-button');
  var tests = [];
  var testWord = "testing";
  var testSentence = "This is a test sentence.";
  var testNumber = 5;
  var passed = 0;
  var failed = 0;

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
      var text = "capitalize returns a new string with the first letter capitalized"
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
      var text = "isString returns true if input value is of type 'string'";
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
      var text = "isString returns false if input value is not of type 'string'";
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
      var text = "last returns the last letter in a string";
      if (e.last(testWord) === 'g') {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  // Checks if remove takes out the provided amount of letters
  tests.push(
    function() {
      var text = 'remove returns a string with letters removed';
      if (e.remove(testWord, testNumber).length === testWord.length - testNumber ) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );

  tests.push(
    function() {
      var text = 'removeAll returns a string with all of a specified letter removed';
      if (e.removeAll(testWord, 't') === 'esing') {
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