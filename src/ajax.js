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
	if(transport.status === 200) {
			if(typeof options.success === 'function')
				options.success(transport);
	}
}

ajax.get = get;
module.exports = ajax;
