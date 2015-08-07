// EasifyJS
// Created by: Sam Webb
// Version: 1.0

;(function(global){

	// 'new' Easify object
	var Easify = function() {
		return new Easify.init();
	}

	Easify.init = function() {
		var self = this;
	}

	Easify.prototype = {

		last: function(str) {
			if (!str) {
				throw 'No string provided.';
			}
			if (typeof str === 'string') {
				return str[str.length - 1];
			} else {
				throw 'Argument must be of type "string".'
			}
		}

	}

	Easify.init.prototype = Easify.prototype;

	global.Easify = global.$E = Easify
}(window));