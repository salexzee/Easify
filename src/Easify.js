// EasifyJS
// Created by: Sam Webb
// Copyright 2015
// Version: 0.0.1

// Dependencies: None

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
      validateNum,
      randomNumberFromItemLength;

  // Private Functions

  // Returns a random number from 0 to the length of
  // the passed in array or string
  randomNumberFromItemLength = function(item) {
    return Math.floor(Math.random() * item.length)
  }

  // For validating strings
  // Always use this if method takes a string artument
  validateString = function(str) {
    // If str can be coerced to false, it will fail
    if (!str) {
      return false;
    }
    // If str is not of type "string" it will fail
    if (typeof str !== "string") {
      return false;
    }
    return true;
  }

  // For validating numbers
  // Always use this if method takes a number argument
  validateNum = function(num) {
    // If num is not of type "number" it will fail
    if(typeof num !== "number") {
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
      } else {
        throw 'String validation failed.'
      }
    },

    // Returns a randomized version of a passed in string
    //
    // Takes 1 argument(string)
    // e.randomize("Hello"); //=> "olelH"
    randomize: function(str) {
      if (validateString(str)) {
        // Split the string into an array
        var arr = str.split('');
        // Set some variables
        var newString = '';
        var num;
        // Array will get shortened by 1 for each iteration
        while (arr.length > 0) {
          // Set random number from 0 to 1 below array length
          num = randomNumberFromItemLength(arr);
          // Add letter to newString
          newString += arr[num];
          // Remove the letter from the array
          arr.splice(num, 1)[0];
        }
        return newString;
      } else {
        throw 'String validation failed.'
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
      } else {
        throw 'Argument validation failed.'
      }
    },

    // Reverse a string
    //
    // Takes 1 argument(string)
    // e.reverse('hello'); //=> 'olleh'
    reverse: function(str) {
      if(validateString(str)) {
        // Break string up into an array of characters
        // including spaces.
        var arr = str.split('');
        // Reverse array
        arr = arr.reverse();
        // Rejoin array into string
        str = arr.join('');
        return str;
      } else {
        throw 'String validation failed.'
      }
    },

    // DOM METHODS

    // Insert HTML into the selected HTML element
    //
    // Takes 4 arguments(string, string, string, number)
    // e.insertHTML('id', 'home-link', 'Home');
    // The previous code will insert the text 'Home' inside
    // of the element on your page with an id of #home-link.
    // Any valid HTML can also be be the input value.
    //
    // Arguments
    // ----------
    // The selectorType argument is expecting a string of
    // either 'id' or 'class'
    //
    // The selector artument is expecting a string that
    // corrisponds to the name provided in the HTML
    // 
    // The input argument can be any valid HTML or text
    //
    // The amount argument is an optional argument and is
    // used when a selector which returns multiple elements
    // is selected. You can set an amount of elements to
    // add your HTML to. It will go in order starting from
    // the first element. If no amount is selected, all
    // elements will get the change.
    // ----------
    insertHTML: function(selectorType, selector, input, amount) {
      // Makes sure first 3 arguments valid
      if (validateString(selectorType) && validateString(selector) && validateString(input)) {

        // Sets some variables
        var element;
        var elements = [];
        var num = 0;

        // Checking the selector type for 'id'
        if (selectorType.toLowerCase() === "id") {
          element = document.getElementById(selector);
          element.innerHTML = input;
        // Checking the selector type of 'class'
        } else if (selectorType.toLowerCase() === "class") {
          // If amount validates to be a number, set the num
          // variable to amount
          if (validateNum(amount)) { num = amount }
          elements = document.getElementsByClassName(selector);
          // Iterates over the elements array and adds the html
          // to every element contained in it
          for (var i = 0; i < ( amount || elements.length ); i++) {
            // Prevents error if amount is higher than the length of
            // elements
            if (i === elements.length) {
              break;
            }
            element = elements[i];
            element.innerHTML = input;
          }
        } else {
          throw 'You must pass either "id" or "class" as the selectorType argument to insertHTML function.'
        }
        // Returns true if successful
        return true;
      }
      // Returns false if unsuccessful
      throw 'insertHTML arguments are invalid.'
      return false;
      // Does not check if there is a matching HTML element. YET!
    }

  }

  // Point init prototype to the Easify prototype
  Easify.init.prototype = Easify.prototype;

  // Sets up global variables
  global.Easify = global.$E = Easify
  
  console.log("Easify loaded!");
}(window));