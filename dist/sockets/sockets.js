"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
var desconectar = function (cliente) {
    cliente.on('disconnect', function () {
        console.log('Cliente desconectado');
    });
};
exports.desconectar = desconectar;
var mensaje = function (cliente, io) {
    cliente.on('mensaje', function (payload, callback) {
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
