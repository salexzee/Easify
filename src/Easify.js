// Easify.JS
// Author: Sam Webb
// Copyright: 2015
// License: MIT
// Version: 0.0.3

// Dependencies: N/A

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
    if (typeof str === "string") {
      return true;
    } else {
      return false;
    }
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

  Easify.VERSION = '0.0.3';

  // Function that actually creates object
  // to remove 'new' keyword for users
  Easify.init = function() {
    var self = this;
  }

  // Universal methods and properties of Easify
  // on the protorype
  Easify.prototype = {

    // **************
    // **************
    // STRING METHODS
    // **************
    // **************

    capitalize: function(str) {
      if (validateString(str)) {
        var strList = str.split('');
        strList[0] = strList[0].toUpperCase();
        str = strList.join('');
        return str;
      } else {
        throw 'String validation failed.'
      }
    },

    isString: function(str) {
      return validateString(str);
    },

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

    // Randomly removes a specified amount of characters from
    // a string
    //
    // Takes 2 arguments(string, number)
    // e.remove('hello', 2); //=> 'hlo'
    // Honestly can't see a use case for this but it's here
    remove: function(str, amount) {
      if (validateString(str) && validateNum(amount)){
        // Protects amount from being larger than the string
        // argument's length
        if (amount > str.length) {
          amount = str.length;
        }
        // Split the string into an array
        var arr = str.split('');
        // Set some variables
        var newString = '';
        var num;
        // Iterate to remove each letter
        for (var i = 0; i < amount; i++) {
          // Set random number from 0 to 1 below array length
          num = randomNumberFromItemLength(arr);
          // Remove random letter from the array
          arr.splice(num, 1)[0];
        }
        newString = arr.join('');
        return newString;
      } else {
        throw 'Argument validation failed.';
      }

    },

    // Removes all occurances of the specified letter from
    // the string
    //
    // Takes 2 arguments(string, string)
    // e.removeAll('hello', 'l'); //=> 'heo'
    removeAll: function(str, letter) {
      if (validateString(str) && validateString(letter)) {
        // Makes sure the letter argument is 1 character long
        if (letter.length !== 1) {
          throw 'The letter argument should not be greater or less than 1.'
        }
        // Sets some variables.
        var newString;
        var arr = str.split('');
        // Loops over the array to check the letters
        for (var i = 0; i < arr.length; i++) {
          // If the letter in the array matches the letter
          // argument, this will run
          if (arr[i] === letter) {
            // Removes letter
            arr.splice(i, 1);
            // Small code to make sure when something is removed,
            // the loop doesn't skip the next letter
            i = i - 1;
          }
        }
        // Join the array back together
        newString = arr.join('');
        return newString;
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
          arr.splice(num, 1);
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

    // Wrap a string in a specified element
    //
    // Takes 2 arguments(string, string)
    // e.wrap('Hello', 'h1'); //=> "<h1>Hello</h1>"
    wrap: function(str, element) {
      // String validation
      if (validateString(str) && validateString(element)) {
        return '<' + element + '>' + str + '</' + element + '>';
      } else {
        throw 'String validation failed.'
      }
    },

    // *************
    // *************
    // ARRAY METHODS
    // *************
    // *************

    // Checks the type of each element contained in the passed
    // in array
    //
    // Takes 1 argument(array)
    // e.checkTypes([1, 'hello', [], {}, function(){}, true])
    // returns
    // ['number', 'string', 'array', 'object', 'function', 'boolean']
    checkTypes: function(arr) {
      if (Array.isArray(arr) === true) {
        var returnedArray = [];
        for (var i = 0; i < arr.length; i++) {
          // Method depends on checkType() method
          returnedArray.push(this.checkType(arr[i]));
        }
        return returnedArray;
      }
      throw 'checkTypes() only accepts arrays'
    },

    // Checks if input value is an array
    isArray: function(arr) {
      if (Array.isArray(arr) === true) {
        return true;
      } else {
        return false;
      }
    },

    // **************
    // **************
    // OBJECT METHODS
    // **************
    // **************

    // Checks if input value returns 'object' and not 'array'
    isObject: function(obj) {
      if (Array.isArray(obj) === true) {
        return false;
      } else if (typeof obj === 'object') {
        return true;
      } else {
        return false;
      }
    },

    // ***********
    // ***********
    // DOM METHODS
    // ***********
    // ***********

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
    },

    // *****************
    // *****************
    // UNIVERSAL METHODS
    // *****************
    // *****************

    // Returns true if arguments are equal.
    isEqual: function(a, b) {
      return a === b;
    },

    // Returns true if arguments are not equal.
    isNotEqual: function(a, b) {
      return a !== b;
    },

    // Returns true if arguments can be coerced to equal.
    isSimilar: function(a, b) {
      return a == b;
    },

    // Returns true if arguments can not be coreced to equal.
    isNotSimilar: function(a, b) {
      return a != b;
    },

    // Checks if the argument is a truthy value
    isTruthy: function(a) {
      if (a) {
        return true;
      } else {
        return false;
      }
    },

    // Checks if the argument is a falsey value
    isFalsey: function(a) {
      if(!a) {
        return true;
      } else {
        return false;
      }
    },

    // Checks the type of a passed in value
    checkType: function(a) {
      // Specific check for arrays since they return from
      // typeof as 'object'
      if (Array.isArray(a) === true) {
        return 'array';
      // Check for null since null returns from typeof as
      // 'object'
      } else if (a === null) {
        return 'null';
      } {
        // Checks for everything else with typeof
        switch (typeof a) {
          case 'string':
            return 'string';
          case 'number':
            return 'number';
          case 'boolean':
            return 'boolean';
          case 'function':
            return 'function';
          case 'object':
            return 'object';
          case 'undefined'
            return 'undefined'
          default:
            return null;
        }
      }
    }

  }

  // **********
  // **********
  // ALTERNATES
  // **********
  // **********

  // Alternate name for isEqual method
  Easify.prototype.equals = Easify.prototype.isEqual;


  // ******************************


  // Point init prototype to the Easify prototype
  Easify.init.prototype = Easify.prototype;

  // Sets up global variables
  global.Easify = global.$E = Easify
  
  console.log("Easify loaded!");
}(window));