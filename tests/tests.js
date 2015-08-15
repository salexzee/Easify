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

  // Test for capitalize method
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

  // Stop adding tests here

  testStartButton.onclick = runTests;
})();