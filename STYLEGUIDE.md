EASIFY JAVASCRIPT STYLE GUIDE
=============================

This style guide is for contributors of Easify.js to understand the ways we prefer our JavaScript to look. The main reason we need this document, is to prevent confusion by standardizing the way we do certain things.

###Basics

- Use 2 spaces for indentation

```javascript
//good
while(true) {
  something(); // uses 2 spaces
}

//bad
while(true) {
    something(); // uses 4 spaces
}

```

- Use single quotes for strings.

```javascript
//good
'Hello world';

//bad
"Hello world";

//bad
String('Hello world');
```

- Use strict equality for comparisons
```javascript
//good
5 === '5' // > false

//good
5 !== '5' // > true

//bad
5 == '5' // > true

//bad
5 != '5' // > false
```

- Always setup new variables with the var keyword.
```javascript
//good
var food1 = 'turkey';

//bad
food2 = 'chicken';
```

- Always end a statement with a semicolon.
```javascript
//good
var car1 = 'Mustang';

//bad
var car2 = 'Escort'
```

- Create new objects with literal notation.
```javascript
//good
var obj1 = {};

//bad, unless absolutely necessary
var obj2 = new Object();
```

-  Use the literal syntax for array creation.
```javascript
// good
var cars = [];

// bad
var cars = new Array();
```

- List variables on seperate lines, lined up by the first letter of the name when creating multiple variables.
```javascript
//good
var car1,
    car2,
    car3

//bad
var car1, car2, car3
```
