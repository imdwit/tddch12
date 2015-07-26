function startSuccessfulGetTest() {
	var out = document.getElementById('output');

	if(!out)
		return;

	function log(text) {
			if(output && typeof output.innerHTML != 'undefined') {
				output.innerHTML += text;
			} else {
				document.write(text);
			}
	}
console.log(ajax)
	try {
		if(ajax && ajax.get) {
			console.log('getting')
			var id = new Date().getTime();

			ajax.get('fragment.html', {
				success: function(xhr) {
					console.log('xhr', xhr)
					log(xhr.responseText);
				}
			});
		} else {
			log('browser does not support ajax.get');
		}
	} catch(e) {
		log('an exception occured', + e.message);
	}






}
