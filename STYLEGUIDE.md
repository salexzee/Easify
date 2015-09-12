EASIFY JAVASCRIPT STYLE GUIDE
=============================

This style guide is for contributors of Easify.js to understand the ways we prefer our JavaScript to look. The main reason we need this document, is to prevent confusion by standardizing the way we do certain things.

###Basics

- Use single quotes for strings

```javascript
//good
'Hello world';

//bad
"Hello world";

//bad
String('Hello world');
```

- Always setup new variables with the var keyword
```javascript
//good
var food1 = 'turkey';

//bad
food2 = 'chicken';
```

- Always end a statement with a semicolon
```javascript
//good
var car1 = 'Mustang';

//bad
var car2 = 'Escort'
```


