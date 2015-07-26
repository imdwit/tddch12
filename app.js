var connect = require('connect');
var statics = require('serve-static');

connect()
.use(statics(__dirname))
.listen(1234);
