module.exports = {
	isHostMethod: function(obj, prop) {
		var type = typeof obj[prop];

		return type == "function" ||
					(type == "object" && !!object[property]) ||
					type == "unknown";
	}
}
