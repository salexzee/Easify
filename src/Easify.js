// Easify.JS
// Author: Sam Webb
// Copyright: 2015
// License: MIT
// Version: 0.5.0 dev

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
  var validateArray,
      validateString,
      validateNum,
      randomNumberFromItemLength;

  // Private Functions

  // Returns a random number from 0 to the length of
  // the passed in array or string
  randomNumberFromItemLength = function(item) {
    return Math.floor(Math.random() * item.length);
  }

  validateArray = function(arr) {
    if (Array.isArray(arr) === true) {
      return true;
    }
    return false;
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

  randomLetter = function() {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return letters[randomNumberFromItemLength(letters)];
  }

  randomNumberAsString = function() {
    return String(Math.ceil(Math.random() * 10));
  }

  randomSpecialChar = function() {
    var specials = ["!", "@", "#", "$", "%", "&", "*"];
    return specials[randomNumberFromItemLength(specials)];
  }

  // End of private functions

  // 'new' Easify object
  var Easify = function() {
    return new Easify.init();
  }

  Easify.VERSION = '0.5.0';

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
        return false;
      }
    },

    downcase: function(str) {
      if(validateString(str)) {
        return str.toLowerCase();
      } else {
        return false;
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
        return false;
      }
    },

    // Creates a random string at the specified length
    // For use as a password
    // If no length is passed in, it defaults to 12
    //
    // Takes 1 optional argument(number)
    // e.password(); //=> "39108%47m!s8e"
    password: function(len) {
      // Set default length to 12
      var len = len || 12;

      if (validateNum(len)) {
        // Setup variables
        var password = '';
        // Letters, numbers and special characters all have a 33% chance
        // of being selected. To change the odds, add the proper method
        // to the possibilities array.
        // For example:
        // To have the following chances: letters(50%), numbers(25%) and special characters(25%)
        // You would need to add another randomLetter item to the possibilities list
        var possibilities = [randomLetter, randomSpecialChar, randomNumberAsString];
        // This does all the work
        for (var i = 0; i < len; i++) {
          password += possibilities[randomNumberFromItemLength(possibilities)]();
        }
        return password;
      } else {
        return false;
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
        return false;
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
          return false;
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
        return false;
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
        return false;
      }
    },

    // Letters in a string are randomly set to upper and lowercase
    // Takes 1 argument(string)
    // e.randomcase("Hello") //=> "HeLLo"

    randomcase: function(str) {
      // Randomize string
      if (validateString(str)) {
       // Split the string into an array
        var arr = str.split('');
        // Set some variables
        var newString = '';
        for (var i = 0; i < arr.length; i++) {
          // Generate a 50/50 chance
          if(Math.round(Math.random() * 1) === 1){
            // Make it Lower case
            newString += arr[i].toLowerCase();
          } else {
            // Make it upper case
            newString += arr[i].toUpperCase();
          }
        }
        return newString;

      } else {
        throw 'String validation failed.';
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
        return false;
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
        var newString = arr.join('');
        return newString;
      } else {
        return false;
      }
    },

    // Pulls from the original trim method
    trim: function(str) {
      if(validateString(str)) {
        return str.trim();
      } else {
        return false;
      }
    },

    upcase: function(str) {
      if(validateString(str)) {
        return str.toUpperCase();
      } else {
        return false;
      }
    },

    // Suplant a.k.a Interpolation string
    //
    // Takes 2 arguments(string, object)
    // e.supplant("My favorite repo. is {repo}.", { repo: "Easify" })  //==> "My favorite repo. is Easify."
    supplant:  function (str, o) {
      // Validate string
      if(validateString(str)){
       // Create a regex to find the brackets: {}
        return str.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
          }
        );
      } else {
        return false;
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
        return false;
      }
    },

    // *************
    // *************
    // ARRAY METHODS
    // *************
    // *************

    // Combines 2 arrays into a single array with all the values
    bridge: function(arr1, arr2) {
      if (validateArray(arr1) && validateArray(arr2)) {
        var newArr = arr1;
        for (var i = 0; i < arr2.length; i++) {
          newArr.push(arr2[i]);
        }
        return newArr;
      } else {
        return false;
      }
    },

    // Combines 2 arrays keeping only unique values
    unify: function(arr1, arr2) {
      var newArr = arr1.concat(arr2.filter(function (i) {
        return arr1.indexOf(i) < 0;
      }));
      return newArr
    },

    // Checks the type of each element contained in the passed
    // in array
    //
    // Takes 1 argument(array)
    // e.checkTypes([1, 'hello', [], {}, function(){}, true])
    // returns
    // ['number', 'string', 'array', 'object', 'function', 'boolean']
    checkTypes: function(arr) {
      if (validateArray(arr)) {
        var returnedArray = [];
        for (var i = 0; i < arr.length; i++) {
          // Method depends on checkType() method
          returnedArray.push(this.checkType(arr[i]));
        }
        return returnedArray;
      } else {
        return false;
      }
    },

    // Returns true if the passed in value is inside of the array
    contains: function(arr, value) {
      if (validateArray(arr)) {
        var isIn = false;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === value) {
            isIn = true;
          }
        }
        return isIn;
      } else {
        return false;
      }
    },

    // Checks if input value is an array
    isArray: function(arr) {
      if (validateArray(arr)) {
        return true;
      } else {
        return false;
      }
    },

    // Returns a new array with only the specified indexes
    parlay: function(arr, indexes) {
      if (validateArray(arr)) {
        for (var i = 0; i < indexes.length; i++) {
          if (!validateNum(indexes[i])) {
            return;
          }
        }

        var newArr = [];
        for (var i = 0; i < indexes.length; i++) {
          if (indexes[i] < arr.length) {
            newArr.push(arr[indexes[i]]);
          }
        }
        return newArr;
      } else {
        return false;
      }
    },

    // Removes the array item at the specified index
    removeItem: function(arr, index) {
      if (validateArray(arr) && validateNum(index)) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
          if (i !== index) {
            newArray.push(arr[i]);
          }
        }
        return newArray;
      } else {
        return false;
      }
    },

    // Returns a new array with the elements shuffled
    shuffle: function(arr) {
      if(validateArray(arr)) {
        var inputArr = arr;
        var newArr = [];
        var num;
        while (inputArr.length > 0) {
          num = randomNumberFromItemLength(inputArr);
          newArr.push(inputArr[num]);
          this.removeItem(inputArr, num);
        }
        return newArr;
      } else {
        return false;
      }
    },

    // Returns a random item from an array
    stray: function(arr) {
      if (validateArray(arr)) {
        return arr[randomNumberFromItemLength(arr)];
      } else {
        return false;
      }
    },

    // **************
    // **************
    // OBJECT METHODS
    // **************
    // **************

    // Combines 2 objects or an array of objects into 1
    combine: function(obj1, obj2) {
      // Checks if both arguments are objects
      if(this.isObject(obj1) && this.isObject(obj2)) {
        var keys1 = Object.keys(obj1);
        var keys2 = Object.keys(obj2);
        var newObj = {};
        for (var i = 0; i < keys1.length; i++) {
          newObj[keys1[i]] = obj1[keys1[i]];
        }
        for (var i = 0; i < keys2.length; i++) {
          newObj[keys2[i]] = obj2[keys2[i]];
        }
        return newObj;
      // Checks if first argument is an array
      } else if (this.isArray(obj1)) {
        var newObj = {};
        for (var i = 0; i < obj1.length; i++) {
          var keys = Object.keys(obj1[i]);
          for (var j = 0; j < keys.length; j++) {
            newObj[keys[j]] = obj1[i][keys[j]];
          }
        }
        return newObj;
      }
      return;
    },

    // Returns an object with all but the specified keys
    drop: function(obj, dropKeys) {
      if (this.isObject(obj) && validateArray(dropKeys)) {
        var keys = Object.keys(obj);
        var newObj = {};
        for (var i = 0; i < keys.length; i++) {
          if (!this.contains(dropKeys, keys[i])) {
            newObj[keys[i]] = obj[keys[i]];
          }
        }
        return newObj;
      }
    },

    // Checks if input value returns 'object' and not 'array'
    isObject: function(obj) {
      if (validateArray(obj)) {
        return false;
      } else if (obj === null) {
        return false;
      } else if (typeof obj === 'object') {
        return true;
      } else {
        return false;
      }
    },

    // Returns an object with only the specified keys
    maintain: function(obj, mKeys) {
      if (this.isObject(obj) && validateArray(mKeys)) {
        var keys = Object.keys(obj);
        var newObj = {};
        for (var i = 0; i < keys.length; i++) {
          if (this.contains(mKeys, keys[i])) {
            newObj[keys[i]] = obj[keys[i]];
          }
        }
        return newObj;
      } else {
        return false;
      }
    },

    // Adds a property or method to an existing object
    // This method mutates the original object
    objectPush: function(obj, property, value) {
      if (this.isObject(obj) && validateString(property)) {
        obj[property] = value;
        return {property: value};
      } else {
        return false;
      }
    },

    // Renames a property of an object and returns it as a new object
    rename: function(obj, original, update) {
      if (this.isObject(obj) && validateString(original) && validateString(update)) {
        var keys = Object.keys(obj);
        var newObj = {};
        if (keys.indexOf(original) !== -1) {
          var index = keys.indexOf(original);
          for (var i = 0; i < keys.length; i++) {
            if (keys[i] !== original) {
             newObj[keys[i]] = obj[keys[i]]
            } else {
             newObj[update] = obj[original];
            }
          }
        } else {
          return;
        }
        return newObj;
      } else {
        return false;
      }
    },
    
    // Clones an object
    clone: function(obj){
      if(this.isObject(obj)) {
        if (null == obj || "object" != typeof obj) { 
          return obj;
        }
        var copy = obj.constructor();
          for (var attr in obj) {
            if (obj.hasOwnProperty(attr)){ 
              copy[attr] = obj[attr];
            }
          }
        return copy;
      } else {
        return false;
      }
    },

    // Converts an object into an array of key/value arrays
    toArray: function(obj) {
      if (this.isObject(obj)) {
        var keys = Object.keys(obj);
        var mainArr = [];
        for (var i = 0; i < keys.length; i++) {
          mainArr.push([keys[i], obj[keys[i]]]);
        }
        return mainArr;
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

    // Returns the DOM element with the passed in ID
    elementFromId: function(id) {
      return document.getElementById(id);
    },

    // Returns a list of DOM elements with the passed in class
    elementsFromClass: function(classname) {
      return document.getElementsByClassName(classname);
    },

    // Returns a list of DOM elements with the passed in tag
    elementsFromTag: function(tag) {
      return document.getElementsByTagName(tag);
    },

    elementsFromName: function(name) {
      return document.getElementsByName(name);
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

    // Runs callback if comparison returns true
    ifTrue: function(comparison, callback){
      if(comparison) {
        callback();
      } else {
        return false;
      }
    },

    // Runs callback if comparison returns false
    ifFalse: function(comparison, callback) {
      if(!comparison) {
        callback();
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
      } else {
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
          case 'undefined':
            return 'undefined';
          default:
            return null;
        }
      }
    },

    // Returns an array containing all Easify methods
    methods: function() {
      return Object.keys($E.prototype);
    },

    // Returns the amount of Easify methods
    methodCount: function() {
      return this.methods().length;
    },

    // ************
    // ************
    // NUMBER METHODS
    // ************
    // ************

    // Returns the sum of the provided numbers
    add: function(a, b) {
      if (validateNum(a) && validateNum(b)) {
        return a + b;
      } else if (this.isArray(a)) {
        var val = 0;
        for (var i = 0; i < a.length; i++) {
          if (validateNum(a[i])) {
            val += a[i];
          }
        }
        return val;
      } else {
        return false;
      }
    },

    // Returns the deduction of the provided numbers
    subtract: function(a, b) {
      if (validateNum(a) && validateNum(b)) {
        return a - b;
      } else if (this.isArray(a)) {
        var val = a[0];
        for (var i = 1; i < a.length; i++) {
          if (validateNum(a[i])) {
            val -= a[i];
          }
        }
        return val;
      } else {
        return false;
      }
    },

    // Returns the product of the provided numbers
    multiply: function(a, b) {
      if (validateNum(a) && validateNum(b)) {
        return a * b;
      } else if (this.isArray(a)) {
        var val = a[0];
        for (var i = 1; i < a.length; i++) {
          if (validateNum(a[i])) {
            val *= a[i];
          }
        }
        return val;
      } else {
        return false;
      }
    },

    // Returns the quotient of the provided numbers
    divide: function(a, b) {
      if (validateNum(a) && validateNum(b)) {
        return a / b;
      } else if (this.isArray(a)) {
        var val = a[0];
        for (var i = 1; i < a.length; i++) {
          if (validateNum(a[i])) {
            val /= a[i];
          }
        }
        return val;
      } else {
        return false;
      }
    },

    // Returns true if the provided argument is of type "number"
    isNum: function(num) {
      return validateNum(num);
    },

    // Returns true if number is odd
    isOdd: function(num) {
      if(validateNum(num)) {
        if (num % 2 !== 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    // Returns true if number is even
    isEven: function(num) {
      if(validateNum(num)) {
        if (num % 2 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },

    // Returns the value of PI
    PI: function() {
      return Math.PI;
    },

    // Returns a random number from 1 to the specified number
    randNum: function(num) {
      if(validateNum(num)) {
        return Math.floor(Math.random() * num) + 1;
      } else {
        return false;
      }
    },

    // Returns a number anywhere from the first input to the second
    // If numbers are the same, and are decimal, that will be returned
    // rounded down to the nearest whole number
    randNumBetween: function(a, b) {
      if(validateNum(a) && validateNum(b)) {
        if (a < b) {
          var num = Math.floor(Math.random() * b) + 1;
          while(num < a || num > b) {
            num = Math.floor(Math.random() * b) + 1;
          }
          return num;
        } else if (b < a) {
          var num = Math.floor(Math.random() * a) + 1;
          while(num < b || num > a) {
            num = Math.floor(Math.random() * a) + 1;
          }
          return num;
        } else {
          return Math.floor(a);
        }
      } else {
        return false;
      }
    },


    /////////////////
    /////////////////
    // SECRET METHODS
    /////////////////
    /////////////////

    // CAUTION: THE METHODS THAT FOLLOW ARE THE EASIFY SECRET
    // METHODS. UNDER NO CIRCUMSTANCE SHOULD THEY EVER BE USED.
    // DO NOT ENTER ANY OF THE FOLLOWING METHODS IN THE README.
    //
    // IF YOU DECIDE TO USE ANY OF THE SECRET METHODS, YOU ARE
    // COMPLETELY LIABLE FOR THE OUTCOME THAT FOLLOWS, NOT ME.

    // Replaces the current website with a random bad word in large,
    // bold letters.
    bw: function() {
      var bw = ['Fuck', 'Shit', 'Motherfucker', 'Ass', 'Asshole', 'Bitch'];
      var word = bw[randomNumberFromItemLength(bw)];
      document.body.innerHTML = '<h1 style="font-weight: bold; text-align: center; font-size: 10em; margin-top: 100px; font-family: sans-serif;">' + word +'</h1>';
      return word;
    }

  }

  // **********
  // **********
  // ALTERNATES
  // **********
  // **********

  // In the future, some aliases will take the place of
  // the actual method. Things like isEqual() will be removed
  // and replaced with simply equal()

  Easify.prototype.equal = Easify.prototype.isEqual;
  Easify.prototype.notEqual = Easify.prototype.isNotEqual;
  Easify.prototype.type = Easify.prototype.checkType;
  Easify.prototype.cap = Easify.prototype.titlecase = Easify.prototype.capitalize;
  Easify.prototype.has = Easify.prototype.contains;
  Easify.prototype.random = Easify.prototype.randNum;
  Easify.prototype.between = Easify.prototype.randNumBetween;
  Easify.prototype.upper = Easify.prototype.upcase;
  Easify.prototype.lower = Easify.prototype.downcase;
  Easify.prototype.plus = Easify.prototype.add;
  Easify.prototype.minus = Easify.prototype.subtract;
  Easify.prototype.even = Easify.prototype.isEven;
  Easify.prototype.odd = Easify.prototype.isOdd;
  Easify.prototype.number = Easify.prototype.isNum;
  Easify.prototype.string = Easify.prototype.isString;
  Easify.prototype.similar = Easify.prototype.isSimilar;
  Easify.prototype.notSimilar = Easify.prototype.isNotSimilar;
  Easify.prototype.array = Easify.prototype.isArray;
  Easify.prototype.unite = Easify.prototype.unify;
  Easify.prototype.format = Easify.prototype.supplant;



  // ******************************


  // Point init prototype to the Easify prototype
  Easify.init.prototype = Easify.prototype;

  // Sets up global variables
  global.Easify = global.$E = Easify

  console.log("Easify loaded!");
}(window));
