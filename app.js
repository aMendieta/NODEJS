//server.js

var express     = require('express');
var app         = express();
//var mongoose     = require('mongoose');

// Conexión con la base de datos
//mongoose.connect('mongodb://localhost:27017/angular-todo');

// Configuración
app.configure(function() {
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/public'));
    // Muestra un log de todos los request en la consola
    app.use(express.logger('dev'));
    // Permite cambiar el HTML con el método POST
    app.use(express.bodyParser());
    // Simula DELETE y PUT
    app.use(express.methodOverride());
});

// Carga una vista HTML simple donde irá nuestra Single App Page
// Angular Manejará el Frontend
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


// Escucha en el puerto 8080 y corre el server
//app.set('port', (process.env.PORT || 5000))
//.listen(process.env.PORT || 5000)
app.listen(process.env.PORT || 5000, function() {
    console.log('App listening on port 9080');
});
