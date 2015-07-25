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


module.exports = ajax;
