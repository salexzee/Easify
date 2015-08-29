EasifyJS
===============

A small library that makes JavaScript easier to work with.

---------------

##CONTRIBUTE

[How to contribute.](CONTRIBUTE.md)


##DOCUMENTATION

To get started, include Easify.min.js in your website. Make sure it's included above your websites JS file. To make sure JS doesn't interfere with the loading of your HTML and CSS, it is suggested that you add your JS files right above your closing `body` tag.

```html
    <script src="js/Easify.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

You'll know it's included if you look in the console and see 'Easify loaded!'

Once included, you'll need to initialize an Easify object. There are 2 ways to do this:

```javascript
// The long hand version
var e = Easify();

// The preferred method
var e = $E();

// Will be using the 'e' variable for the rest of this section
````

Now you can access all of the Easify methods by using dot notation.

####String Methods

***capitalize***

*Alias: cap*

Used to capitalize the first letter of a provided string.

```javascript
e.capitalize('john'); // > "John"
```

***isString***

Used to check if the provided value is of type 'string'.

```javascript
e.isString('hello world'); // > true
e.isString(33); // > false
```

***last***

Used to get the last letter of a string.

```javascript
e.last('hello world'); // > "d"
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

***wrap***

Used to wrap a provided string inside of a provided HTML element.

```javascript
e.wrap('hello world', 'h1'); // > "<h1>hello world</h1>"
```


####ARRAY METHODS

***bridge***

Combines 2 arrays and returns 1 array of all values

```javascript
e.bridge([1,2,3], [4,5,6]); // > [1, 2, 3, 4, 5, 6]
```

***checkTypes***

Used to check the types of all values contained in a passed in array

```javascript
e.checkTypes([{}, [], 'hello', 3, function(){}, true]); // > ["object", "array", "string", "number", "function", "boolean"]
```

***contains***

*Alias: has*

Used to check if a specific value is inside of an array

```javascript
e.contains([1,2,3], 4); // > false
e.contains([1,2,3], 2); // > true
```

***isArray***

Used to check if passed in value is an array

```javascript
e.isArray([]); // > true
e.isArray({}); // > false
e.isArray('hello'); // > false
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

***shuffle***

Returnes a new array with the input array's values shuffled

```javascript
e.shuffle([1,2,3,4,5]); // > [2, 4, 1, 5, 3]
```


####OBJECT METHODS

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

Returns a new object without the specified keys

```javascript
var person = {name: 'John', age: 21, title: 'Mr.'};

e.drop(person, ["title"]); // > {name: "John", age: 21}
```

***isObject***

Used to check if passed in value is an object

```javascript
e.isObject({}); // > true
e.isObject([]); // > false
e.isObject(4); // > false
e.isObject(null); // > false
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

***rename***

Changes the name of the specified property name of an object

```javascript
var person = {firstname: 'John'};
e.rename(person, 'firstname', 'name'); // > {name: "John"}
```

***toArray***

Converts an object into an array of arrays containing the key and value

```javascript
var person = {firstname: 'John', lastname: 'Doe'};
e.toArray(person); // > [["firstname", "John"], ["lastname", "Doe"]]
```


####DOM Methods

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


####Universal Methods

***isEqual***

*Alias: equals*

Returns true if both arguments are equal (strict).

```javascript
e.isEqual(5, 5); // > true
e.isEqual(5, '5'); // > false
e.isEqual('hello', 'hello'); // > true
```

***isNotEqual***

Returns true if both arguments are not equal (strict).

```javascript
e.isNotEqual(5, 5); // > false
e.isNotEqual(5, '5'); // > true
e.isNotEqual('hello', 'Hello'); // true
```

***isSimilar***

Returns true if both arguments are equal (not strict).

```javascript
e.isSimilar(5, 5); // > true
e.isSimilar(5, '5'); // > true
e.isSimilar('hello', 'Hello'); // > false
```

***isNotSimilar***

Returns true if both arguments are not equal (not strict).

```javascript
e.isNotSimilar(5, 5); // > false
e.isNotSimilar(5, '5') // > false
e.isNotSimilar('hello', 'Hello'); // > true
```

***isTruthy***

Returns true if input is truthy value.

```javascript
// Numbers
e.isTruthy(0); // > false
e.isTruthy(1); // > true

// Strings
e.isTruthy(''); // > false
e.isTruthy('hello'); // > true

// Arrays
e.isTruthy([]); // > true
e.isTruthy([1, 2, 3]); // > true

// Objects
e.isTruthy({}); // > true
e.isTruthy({a: 1, b: 2, c: 3}); // > true

// Functions
e.isTruthy(function(){}); // > true
```

***isFalsey***

Returns true if input is falsey value.

```javascript
// Numbers
e.isFalsey(0); // > true
e.isFalsey(1); // > false

// Strings
e.isFalsey(''); // > true
e.isFalsey('hello'); // > false

// Arrays
e.isFalsey([]); // > false
e.isFalsey([1, 2, 3]); // > false

// Objects
e.isFalsey({}); // > false
e.isFalsey({a: 1, b: 2, c: 3}); // > false

// Functions
e.isFalsey(function(){}); // > false
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

***checkType***

*Alias: type*

Returns the type of a passed in value.

```javascript
e.checkType([]); // > "array"
e.checkType({}); // > "object"
e.checkType('hello'); // > "string"
e.checkType(3); // > "number"
e.checkType(true); // > "boolean"
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


####Number Methods

*Everything in the Number section is only available in 0.3.0 development version*

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

// Divides using an array of numbers
e.divide([20, 2, 5]); // > 2
```

***isNum***

Checks if provided argument is of type "number"

```javascript
e.isNum(5); // > true
e.isNum('5'); // > false
e.isNum(true); // > false
```


##TESTS

To run tests is simple, just open test/index.html in your browser of choice and click the "Run Tests" button. You'll see a long list of the tests that were run and whether they passed or failed.

To make sure all the tests were run, look in the console for a line that says, "Tests run!"

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
// Checks if capitalize() returns a string with the first letter capitalized
  tests.push(
    function() {
      var text = "capitalize() returns a new string with the first letter capitalized";
      runTest(e.capitalize('testing') === 'Testing', text);
    }
  );
```

##FINAL NOTES

The website portion of this uses AngularJS so if things look a little odd in your forked version, it's because you need to run it in some sort of server. If you're using [Brackets](http://brackets.io/) as your text editor, you should be good if you hit the preview button from website/index.html.

Some methods in this README are only accessible in the current development version and will be identified.