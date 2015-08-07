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

		// Easy way to grab the last letter of a string
		// e.last('hello'); //=> "o"
		last: function(str) {
			// If str can be coerced to false, it will fail
			if (!str) {
				throw 'No string provided.';
			}
			// Checks to make sure it is a string
			if (typeof str === 'string') {
				return str[str.length - 1];
			} else {
				throw 'Argument must be of type "string".'
			}
		}

	}

	// Point init prototype to the Easify prototype
	Easify.init.prototype = Easify.prototype;

	// Sets up global variables
	global.Easify = global.$E = Easify
}(window));