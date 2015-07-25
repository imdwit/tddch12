var test = require('tape');
var ajax = require("../src/ajax");
var tddjs = require('../src/tdd');

test('test should return XMLHttpRequest object', function(assert) {
	var xhr = ajax.create();

	assert.equal(typeof xhr.readyState, 'number');
	assert.ok(tddjs.isHostMethod(xhr, 'open'));
	assert.ok(tddjs.isHostMethod(xhr, 'send'));
	assert.ok(tddjs.isHostMethod(xhr, 'setRequestHeader'));
	assert.end();
});
