EasifyJS
===============

A small library that makes JavaScript easier to work with.

---------------

##DOCUMENTATION

To get started, include Easify.js in your website. Make sure it's included above your websites JS file. To make sure JS doesn't interfere with the loading of your HTML and CSS, it is suggested that you add your JS files right above your closing `body` tag.

```html
    <script src="js/Easify.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>
```

Once included, you'll need to initialize an Easify object. There are 2 ways to do this:

```javascript
// The long hand version
var e = Easify();

// The preferred method
var e = $E();

// Will be using the 'e' variable for the rest of this section
````

Now you can access all of the Easify methods by using dot notation.

***Capitalize***

Used to capitalize the first letter of a provided string.

```javascript
e.capitalize('john'); // > 'John' 
```

***isString***

Used to check if the provided value is of type 'string'

```javascript
e.isString('hello world'); // > true
e.isString(33); // > false
```

##CONTRIBUTE

Currently, there are 2 ways you can contribute to this project:

1. Submit an issue. When submitting an Issue please precede the title with some sort of category so it can easily be identified. Please make sure the category is all caps and is followed by a colon. (ex. WEBSITE:, BUG FIX:, FEATURE REQUEST:, etc.)

2. You can submit code via Pull Request. Before submitting a pull request, make sure you submit an issue to see if your idea is already being worked on by someone else. The list of issues is also a great place to start looking if you want to get into this project. If you want to start working on one of the issues, just submit a reply letting everyone know that you're planning on tackling it. This will keep a bunch of people from working on the same issues.

In the future, this section will be moved into a CONTRIBUTE.md file along with anything else deemed necessary. For now it's small enough to just leave here.


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
    if(a > b) { // Your test condition will replace 'a > b'
      testOutput(text, 'true');
    } else {
      testOutput(text, 'false');
    }
  }
);
```

Here is an example of a real world test:

```javascript
// Checks if remove() takes out the provided amount of letters
  tests.push(
    function() {
      var text = 'remove returns a string with letters removed';
      if (e.remove(testWord, testNumber).length === testWord.length - testNumber ) {
        testOutput(text, 'passed');
      } else {
        testOutput(text, 'failed');
      }
    }
  );
```

##FINAL NOTES

The website portion of this uses AngularJS so if things look a little odd in your forked version, it's because you need to run it in some sort of server. If you're using [Brackets](http://brackets.io/) as your text editor, you should be good if you hit the preview button from website/index.html.