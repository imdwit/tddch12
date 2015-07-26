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
