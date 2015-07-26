(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var tdd = require('./tdd');
var xhr;
var ajax = {};

var options = [
	function() {
		return new ActiveXObject("Microsoft.XMLHTTP");
	},
	function() {
		return new XMLHttpRequest();
	}
];

for (var i = 0; i < options.length; i++) {
	try {
		xhr = options[i]();

		if (typeof xhr.readyState == 'number' &&
			tdd.isHostMethod(xhr, 'open') &&
			tdd.isHostMethod(xhr, 'send') &&
			tdd.isHostMethod(xhr, 'setRequestHeader')
		) {
			ajax.create = options[i];
			break;
		}
	} catch (e) {}
}

function get(url, options) {
	options = options || {};
	if(typeof url !== 'string') {
		throw new TypeError('URL must be a string');
	}

	var transport = ajax.create();
	transport.onreadystatechange = function(){
		if(transport.readyState === 4) {

			requestComplete(transport, options);
		}
	};


	transport.open('GET', url, true);
	transport.send();
}

function requestComplete(transport, options) {
	if(transport.status === 200 || (tdd.isLocal() && !status)) {
			if(typeof options.success === 'function')
				options.success(transport);
	}
}

ajax.get = get;
if(window)
	window.ajax = ajax;
module.exports = ajax;

},{"./tdd":2}],2:[function(require,module,exports){
module.exports = {
	isHostMethod: function(obj, prop) {
		var type = typeof obj[prop];

		return type == "function" ||
					(type == "object" && !!object[property]) ||
					type == "unknown";
	},
	stubFn: function(returnValue) {
		var fn = function() {
			fn.called = true;
			fn.args = arguments;
			return returnValue;
		};

		fn.called = false;

		return fn;
	},
	isLocal: function() {
		return !!(window.lcoation && window.lcation.protocol.indexOf('file:') === 0);
	}
};

},{}]},{},[1]);
