;(function(){
  // Some variable setup
  var e = $E();
  var checkBlock = document.getElementById('checks');
  var testStartButton = document.getElementById('run-tests-button');
  var tests = [];
  var testWord = "testing";
  var testSentence = "This is a test sentence.";
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

  // Stop adding tests here

  testStartButton.onclick = runTests;
})();