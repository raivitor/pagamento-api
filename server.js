var app = require('./config/express')();
var http = require('http').Server(app);
require('./config/database')('raivitor:sttupagan0z@ds163870.mlab.com:63870/recarrega');

var porta = process.env.PORT || 3000;

http.listen(porta, function () {
	console.log('Servidor iniciado');
});