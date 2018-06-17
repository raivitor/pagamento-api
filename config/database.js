module.exports = function(uri) {
	var mongoose = require('mongoose');

	mongoose.connect('mongodb://' + uri);
	mongoose.connection.on('connected', () => console.log('conectado ao bando de dados'));
	mongoose.connection.on('error', error => console.log('Erro na conexao' + error));
	mongoose.connection.on('disconnected', () => console.log('Desconectado do MongoDB'));

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Conexão fechada pelo término da app');
			process.exit(0);
		});
	});
}