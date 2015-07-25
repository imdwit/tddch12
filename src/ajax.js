module.exports = {
	create: function() {
		var options = [
			function() {
				return new ActiveXObject("Microsoft.XMLHTTP");
			},
			function() {
				return new XMLHttpRequest();
			}
		];

		for(var i = 0; i < options.length; i++) {
			try {
				return options[i]();
			} catch(e) {}
		}
		return null;
	}


};//end exports
