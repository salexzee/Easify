EasifyJS
===============

[![Join the chat at https://gitter.im/salexzee/Easify](https://img.shields.io/badge/GITTER-join%20chat-45cba1.svg)](https://gitter.im/salexzee/Easify?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/salexzee/Easify.svg?branch=master)](https://travis-ci.org/salexzee/Easify)

A small library that makes JavaScript easier to work with.

 - [Contribute](#contribute)
 -  [Installation](#installation)
 -  [Documentation](#documentation)
    - [String Methods](#string-methods)
    - [Array Methods](#array-methods)
    - [Object Methods](#object-methods)
    - [DOM Methods](#dom-methods)
    - [Universal Methods](#universal-methods)
    - [Number Methods](#number-methods)
 - [Tests](#tests)
 
#Contribute

For more information on how to contribute, view `CONTRIBUTE.md` or click [here](CONTRIBUTE.md).

If you want a list of contributors in order of thier contribution, view `CONTRIBUTORS.md` or click [here](CONTRIBUTORS.md).

[Check out the style guide.](STYLEGUIDE.md)


#Installation	

To get started, include `easify-min.js` in your website. Make sure it's included above your websites JS file. To make sure JS doesn't interfere with the loading of your HTML and CSS, it is suggested that you add your JS files right above your closing `body` tag.

**Normal download usage**

```html
    <script src="js/easify.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

**Node usage**

In the terminal, run `npm install easifyjs`

```html
    <script src="node_modules/easifyjs/easify.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

Easify is also accessible to your back-end JS by referring to the global scope:

```javascript
var e = global.Easify();
```

You'll know it's included if you look in the console and see:

    Easify loaded!

#Documentation

Once included/installed, you will need to initialize an Easify object. There are 2 ways to do this:

```javascript
// The long hand version
var e = Easify();

// The preferred method
var e = $E();

// Will be using the 'e' variable for the rest of this section
```

Now you can access all of the Easify methods by using dot notation.

*Note: If you want to play around with Easify, visit [easifyjs.com](http://easifyjs.com/) and open the console. There you can use the already setup `e` variable to run any of the Easify methods.*

For example, find out if a number is odd or not:
 
```javascript
// This checks to see if a number is odd
e.odd(5); // > true
e.odd(4); // > false


// The above code is simplifying something similar to this:
function odd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

odd(5); // > true
odd(4); // > false


// Which would you rather have in your code?
```

String Methods
---

***cap***

Used to capitalize the first letter of a provided string.

```javascript
e.cap('john'); // > "John"
```

***downcase***

Converts all letters in a string to lowercase.

```javascript
e.downcase('HELLO WORLD'); // > "hello world"
```

***string***

Used to check if the provided value is of type 'string'.

```javascript
e.string('hello world'); // > true
e.string(33); // > false
```

***last***

Used to get the last letter of a string.

```javascript
e.last('hello world'); // > "d"
```

***password***

Used to get a random assortment of letters, numbers and special characters for use as a password or anything else

```javascript
// Takes 1 argument for the length of the string
e.password(10); // > "5r92x*%9@w"

// When no length is passed in, it defaults to 12
e.password(); // > "9#r10c10g$4d&!"

```

***remove***

Used to remove a specified amount of random letters from a provided string.

```javascript
e.remove('hello world', 4); // > "hell od"
e.remove('hello world', 4); // > "heloorl"
```

***removeAll***

Used to remove all instances of a specified letter from a provided string.

```javascript
e.removeAll('hello world', 'l'); // > "heo word"
```

***randomize***

Used to randomly sort the letters in a provided string.

```javascript
e.randomize('hello world'); // > "lrdlwloeho "
e.randomize('hello world'); // > "roheodlw ll"
```
***randomcase***

Used to randomlly make letters uppercase or lowercase.

```javascript
e.randomcase('hello world'); // > "HeLLo WOrld"
e.randomcase('hello world'); // > "hELLo WorlD"
```


***repeat***

Used to repeate a provided string, a specified amount of times. Also trims off white space from the beginning and end.

```javascript
e.repeat('John ', 3); // > "John John John";
```

***reverse***

Used to reverse the order of a string.

```javascript
e.reverse('hello world'); // > "dlrow olleh"
```

***trim***

Removes any white space from the beginning and end of a string

```javascript
e.trim(' hello world '); // > "hello world"
```

***upcase***

Converts all letters in a string to uppercase.

```javascript
e.upcase('hello world'); // > "HELLO WORLD"
```

***format***

Evaluates a string literal containing one or more placeholders, returning a result in which the placeholders are replaced with their corresponding values.

```javascript
e.format('Good {time}, how are {who}?', { time: 'afternoon', who: 'you' });
// > "Good afternoon, how are you?"
```

*Only in development version*

***wrap***

Used to wrap a provided string inside of a provided HTML element.

```javascript
e.wrap('hello world', 'h1'); // > "<h1>hello world</h1>"
```


Array Methods
---

***bridge***

Combines 2 arrays and returns 1 array of all values

```javascript
e.bridge([1,2,3], [4,5,6]); // > [1, 2, 3, 4, 5, 6]
```

***unify***

Combines 2 arrays keeping only unique values

```javascript
e.unify([1, 2, 3], [2, 3, 4, 5]); // > [1, 2, 3, 4, 5]
```

***checkTypes***

Used to check the types of all values contained in a passed in array

```javascript
e.checkTypes([{}, [], 'hello', 3, function(){}, true]); // > ["object", "array", "string", "number", "function", "boolean"]
```

***has***

Used to check if a specific value is inside of an array

```javascript
e.has([1,2,3], 4); // > false
e.has([1,2,3], 2); // > true
```

***array***

Used to check if passed in value is an array

```javascript
e.array([]); // > true
e.array({}); // > false
e.array('hello'); // > false
```

***parlay***

Creates a new array out of specified indexes from the provided array

```javascript
e.parlay(['a','b','c','d','e'], [0,3,4]); // > ["a", "d", "e"]
```

***removeItem***

Returns a new array without the specified index of the input array

```javascript
e.removeItem(['a', 'b', 'c'], 1); // > ["a", "c"]
```

***search***

Takes an array and returns a new array of strings with character sequences that match the provided string.

```javascript
var food = ['ham', 'potatos', 'spam', 'jam', 'chicken'];
e.search(food, 'am'); // > ['ham', 'spam', 'jam']
```

***shuffle***

Returnes a new array with the input array's values shuffled

```javascript
e.shuffle([1,2,3,4,5]); // > [2, 4, 1, 5, 3]
```


Object Methods
---

***clear***

Takes in an object and clears all the contents.

```javascript
var person = {name: 'John', age: 21};
e.clear(person);
person; // > {}
```

***combine***

Takes 2 object arguments or a single argument which is an array of objects.

Returns a new object which has all keys from input objects. If values conflict, the value from the right most object will take precedence

```javascript
var person = {name: 'John', age: 21};
var dog = {fur: 'black', eyes: 'brown'};
var cat = {fur: 'white', legs: 4};

// With 2 objects
e.combine(dog, cat); // > {fur: "white", eyes: "brown", legs: 4}
// With array of objects
e.combine([person, cat, dog]); // > {name: "John", age: 21, fur: "black", eyes: "brown", legs: 4}
```

***drop***

Removes the specified methods/properties from the input object 

```javascript
var person = {name: 'John', age: 21, title: 'Mr.'};

e.drop(person, ["title", "age"]);

console.log(person); // > {name: "John"}
```

***isObject***

Used to check if passed in value is an object

```javascript
e.isObject({}); // > true
e.isObject([]); // > false
e.isObject(4); // > false
e.isObject(null); // > false
```

***keys***

Returns an array containing the keys of the provided object

```javascritp
var obj = {name: 'John Smith', age: 21};
e.keys(obj); // > ["name", "age"]
```

***maintain***

Returns a new object with only the specified keys

```javascript
var person = {name: 'John', age: 21, title: 'Mr.'};

e.maintain(person, ['name', 'age']); // > {name: "John", age: 21}
```

***objectPush***

Adds a property and a value to an object

```javascript
var person = {name: 'John', age: 21};

e.objectPush(person, 'title', 'Mr.'); // > {name: "John", age: 21, title: "Mr."}
```

***proto***

Returns the prototype of the provided object

```javascript
function Hello(){};
Hello.prototype = {greet: 'Hello world'};
h = new Hello();
e.proto(h); // > {greet: "Hello world"}
```

***rename***

Changes the name of the specified property name of an object

```javascript
var person = {firstname: 'John'};
e.rename(person, 'firstname', 'name'); // > {name: "John"}
```

***clone***

Clones an object and its properties/attributes

```javascript
var person = {firstname: 'John'};
var person2 = e.clone(person); // > { firstname: "John" }
```

***size***

Returns the amount of keys in the provided object

```javascript
var obj = {car1: 'Mustang', car2: 'Impala', car3: 'Pento'};
e.size(obj); //> 3
```

***toArray***

Converts an object into an array of arrays containing the key and value

```javascript
var person = {firstname: 'John', lastname: 'Doe'};
e.toArray(person); // > [["firstname", "John"], ["lastname", "Doe"]]
```

***values***

Returns an array of the values from the provided object

```javascript
var person = {firstname: 'John', lastname: 'Doe'};
e.values(person) // > ["John", "Doe"]
```

DOM Methods
---

***insertHTML***

Used to insert text or HTML into a selected element. Can be used with id or class selectors. If class is selected, a 4th(optional) parameter can be used to specify how many will be affected, starting from the first.

```javascript
// This will place 'hello world' inside of the element with an id of #id-name
e.insertHTML('id', 'id-name', 'hello world');

// This will place 'hello world' inside of all elements with the class of .class-name
e.insertHTML('class', 'class-name', 'hello world');

// This will place 'hello world' inside of 2 elements with the class of .class-name
e.insertHTML('class', 'class-name', 'hello world', 2);

// Note: If the amount argument is more than the amount of elements with
// the specified classname, the amount argument will default to actual
// amount of elements.
```

***elementFromId***

Returns the DOM element with the given ID.

```javascript
// Will return the element with the #heading ID. If it doesn't exist, it will return null.
e.elementFromId('heading');
```

***elementsFromClass***

Returns an array of DOM elements with the given class

```javascript
// Will return an array of elements with the class of .item.
e.elementsFromClass('item');
```

***elementsFromTag***

Returns an array of DOM elements of the provided tag name

```javascript
// Will return an array of all divs on the page
e.elementsFromTag('div');
```

***elementsFromName***

Returns an array of DOM elements with the provided name

```javascript
// Will return an array of elements with the name "city"
e.elementsFromName('city');
```


Universal Methods
---

***compare***

Returns true if 2 arrays or objects are the same

```javascript
var arr1 = [1,2,3];
var arr2 = [1,2,3];
e.compare(arr1, arr2); // > true

var arr1 = [1,2,3];
var arr2 = [1,2,3,4];
e.compare(arr1, arr2); // > false

var obj1 = {name: 'John', age: 21};
var obj2 = {name: 'John', age: 21};
e.compare(obj1, obj2); // > true

var obj1 = {name: 'John', age: 21};
var obj2 = {name: 'Jane', age: 28};
e.compare(obj1, obj2); // > false
```

***equal***

Returns true if both arguments are equal (strict).

```javascript
e.equal(5, 5); // > true
e.equal(5, '5'); // > false
e.equal('hello', 'hello'); // > true
```

***notEqual***

Returns true if both arguments are not equal (strict).

```javascript
e.notEqual(5, 5); // > false
e.notEqual(5, '5'); // > true
e.notEqual('hello', 'Hello'); // true
```

***similar***

Returns true if both arguments are equal (not strict).

```javascript
e.similar(5, 5); // > true
e.similar(5, '5'); // > true
e.similar('hello', 'Hello'); // > false
```

***notSimilar***

Returns true if both arguments are not equal (not strict).

```javascript
e.notSimilar(5, 5); // > false
e.notSimilar(5, '5') // > false
e.notSimilar('hello', 'Hello'); // > true
```

***truthy***

Returns true if input is truthy value.

```javascript
// Numbers
e.truthy(0); // > false
e.truthy(1); // > true

// Strings
e.truthy(''); // > false
e.truthy('hello'); // > true

// Arrays
e.truthy([]); // > true
e.truthy([1, 2, 3]); // > true

// Objects
e.truthy({}); // > true
e.truthy({a: 1, b: 2, c: 3}); // > true

// Functions
e.truthy(function(){}); // > true
```

***falsey***

Returns true if input is falsey value.

```javascript
// Numbers
e.falsey(0); // > true
e.falsey(1); // > false

// Strings
e.falsey(''); // > true
e.falsey('hello'); // > false

// Arrays
e.falsey([]); // > false
e.falsey([1, 2, 3]); // > false

// Objects
e.falsey({}); // > false
e.falsey({a: 1, b: 2, c: 3}); // > false

// Functions
e.falsey(function(){}); // > false
```

***ifTrue***

Runs a provided function if the comparison returns true.

```javascript
e.ifTrue(1 < 2, function(){return '1 is less than 2'});
// > "1 is less than 2"
```

***ifFalse***

Runs a provided function if the comparison returns false.

```javascript
e.ifFalse(1 > 2, function(){return '1 is actually less than 2'});
// > "1 is actually less than 2"
```

***type***

Returns the type of a passed in value.

```javascript
e.type([]); // > "array"
e.type({}); // > "object"
e.type('hello'); // > "string"
e.type(3); // > "number"
e.type(true); // > "boolean"
```

***methods***

Returns an array of the Easify methods.

```javascript
e.methods(); // > ["capitalize", "isString", ... , "methodCount", "last"];
```

***methodCount***

Returns the amount of methods on EasifyJS.

```javascript
e.methodCount(); // > 41
```


Number Methods
---

***add***

Performs addition on 2 or more numbers.

```javascript
// Add just 2 numbers
e.add(5, 5); // > 10

// Add an array of numbers
e.add([5, 5, 5]); // > 15
```

***subtract***

Performs subtraction on 2 or more numbers.

```javascript
// Subtract using 2 numbers
e.subtract(5, 3); // > 2

// Subtract using an array of numbers
e.subtract([10, 4, 1]); // > 5
```

***multiply***

Multiplies 2 or more numbers together.

```javascript
// Multiplies 2 numbers
e.multiply(5, 5); // > 25

// Multipllies an array of numbers
e.multiply([5, 2, 2]); > 20
```

***divide***

Performs division with 2 or more numbers.

```javascript
// Divides using 2 numbers
e.divide(6, 3); // > 2

// Divides using an array of numbers.
e.divide([20, 2, 5]); // > 2
```

***number***

Checks if provided argument is of type "number".

```javascript
e.number(5); // > true
e.number('5'); // > false
e.number(true); // > false
```

***odd***

Checks if number is odd.

```javascript
e.odd(5); // > true
e.odd(4); // > false
```

***even***

Checks if number is even.

```javascript
e.even(5); // > false
e.even(4); // > true
```

***PI***

Returns the value of PI.

```javascript
e.PI(); // > 3.141592653589793
```

***random***

Returns a random whole number from 1 to the specified number.

```javascript
e.random(5); // > 4
e.random(5); // > 1
e.random(5); // > 2

// If argument is 0, return value will be 1
e.random(0); // > 1
```

***between***

Returns a random whole number between and including the 2 arguments.

```javascript
e.between(5, 10); // > 7

// The order of the numbers doesn't matter
e.between(10, 5); // > 6

// 2 of the same decimal number will round down to it's whole number
e.between(5.5, 5.5); // > 5
```


##Tests

Before submitting a pull request, make sure you run the the tests to make sure nothing broke.

First make sure the dependencies are installed with:

```shell
npm install
```

Once the dependencies are installed, run the following:

```shell
npm test
```

Yep, that's it. Simple right?

To add a new test, open `test/test.js`. Easify uses [Chai](http://chaijs.com/)'s assert library inside of [Mocha](http://mochajs.org/). Check out the [Chai documentation](http://chaijs.com/api/assert/) to learn more about using the assert library. Also check out the [Mocha website](http://mochajs.org/) to learn about how our `test.js` file is formatted.

**Note: Below is the old way to run tests**

Navigate to the `tests` directory and open `index.html` in your default web browser, then click the "Run Tests" button. You'll see a long list of the tests that were run and whether they passed or failed.

To make sure all the tests were run, look in the console and you'll see something similar to the following:

```
Tests run!
62 passed - 0 failed
```

*Numbers will be different as more tests are added.*

Tests are very simple to implement. Here's the format:

```javascript
// This is where you put your description of the test and any
// amplifying information.
tests.push(
  function() {
    var text = "Short description that will appear when testing";
    runTest(comparison, text);
  }
);
```

Here is an example of a real world test:

```javascript
// Checks if cap() returns a string with the first letter capitalized
  tests.push(
    function() {
      var text = "cap() returns a new string with the first letter capitalized";
      runTest(e.cap('testing') === 'Testing', text);
    }
  );
```
