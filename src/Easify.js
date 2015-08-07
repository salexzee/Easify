// EasifyJS
// Created by: Sam Webb
// Version: 1.0

// Start with semicolon in case other libraries
// don't end with one.
;(function(global){
  // Creating new easify object:
  // var e = Easify();
  // or the preferred method
  // var e = $E();
  // Will be using e variable throughout the code

  // Variables
  var validateString,
      validateNum;

  // Private Functions

  // For validating strings
  validateString = function(str) {
    // If str can be coerced to false, it will fail
    if (!str) {
      throw 'No string provided.';
      return false;
    }
    // If str is not of type "string" it will fail
    if (typeof str !== "string") {
      throw 'Argument must be of type "string".';
      return false;
    }
    return true;
  }

  // For validating numbers
  validateNum = function(num) {
    // If num is not of type "number" it will fail
    if(typeof num !== "number") {
      throw 'Argument must be of type "number".';
      return false;
    }
    return true;
  }

  // End of private functions

  // 'new' Easify object
  var Easify = function() {
    return new Easify.init();
  }

  // Function that actually creates object
  // to remove 'new' keyword for users
  Easify.init = function() {
    var self = this;
  }

  // Universal methods and properties of Easify
  // on the protorype
  Easify.prototype = {

    // STRING METHODS

    // Easy way to grab the last letter of a string
    //
    // Takes 1 argument(string)
    // e.last('hello'); //=> "o"
    last: function(str) {
      if (validateString(str)) {
        return str[str.length - 1];
      }
    },

    // Repeat the same string multiple times, trimming off
    // extra white space at the beginning or end
    //
    // Takes 2 arguments(string, number)
    // e.repeat('hello ', 4); //=> "hello hello hello hello"
    repeat: function(str, count) {
      if(validateString(str) && validateNum(count)) {
        // Variable to store the created string
        var repeatedString = '';
        // Add input string to the variable however many
        // times, specified in count variable.
        // If count is 0, an empty string will be returned.
        for (var i = 0; i < count; i++) {
          repeatedString += str;
        }
        return repeatedString.trim();
      }
    }

  }

  // Point init prototype to the Easify prototype
  Easify.init.prototype = Easify.prototype;

  // Sets up global variables
  global.Easify = global.$E = Easify
}(window));