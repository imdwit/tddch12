var test = require('tape');
var ajax = require("../src/ajax");
var tddjs = require('../src/tdd');
var fakexhr = require("../src/fakexhr");
var before = test;
var after = test;

test('test should return XMLHttpRequest object', function(assert) {
	var xhr = ajax.create();

	assert.equal(typeof xhr.readyState, 'number');
	assert.ok(tddjs.isHostMethod(xhr, 'open'));
	assert.ok(tddjs.isHostMethod(xhr, 'send'));
	assert.ok(tddjs.isHostMethod(xhr, 'setRequestHeader'));
	assert.end();
});


test('test should definte get method', function(assert) {
	assert.equal(typeof ajax.get, 'function');

	assert.end();
});


test('test should throw error without url', function(assert) {
	assert.throws(function(){
		ajax.get();
	}, 'TypeError');

	assert.end();
});

test('test should obtain an XMLHttpRequest object', function(assert) {
	var ajaxCreate = ajax.create;
	var xhr = Object.create(fakexhr);
	ajax.create = tddjs.stubFn(xhr);

	ajax.get('/url');

	assert.ok(ajax.create.called, 'ajax create is called');
	ajax.create = ajaxCreate;
	assert.end();
});


test('test should call open with method, url, async flag', function(assert) {
	var ajaxCreate = ajax.create;
	var xhr = Object.create(fakexhr);
	ajax.create = tddjs.stubFn(xhr);
	var url = 'url';
	ajax.get(url);

	assert.deepEqual(['GET', url, true], xhr.open.args);
	ajax.create = ajaxCreate;
	assert.end();
});


test('tes should add onreadystatechange handler', function(assert) {
	var ajaxCreate = ajax.create;
	var xhr = Object.create(fakexhr);
	ajax.create = tddjs.stubFn(xhr);
	var url = 'url';
	ajax.get(url);

	assert.equal(typeof xhr.onreadystatechange, 'function');
	assert.end();
});


test('test should call send', function(assert) {

	var ajaxCreate = ajax.create;
	var xhr = Object.create(fakexhr);
	ajax.create = tddjs.stubFn(xhr);
	var url = 'url';
	ajax.get(url);

	assert.ok(xhr.send.called);

	assert.end();
});
