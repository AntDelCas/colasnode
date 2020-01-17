// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

//escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Conexión perdida');
});


socket.on('estadoActual', function(resp) {
    console.log(resp.actual);
    label.text(resp.actual);
})


$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });


})