"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMensajeV2 = exports.sendMensaje = exports.getMensaje = void 0;
var getMensaje = function (req, res) {
    res.json({
        ok: true,
        msg: 'hola'
    });
};
exports.getMensaje = getMensaje;
var sendMensaje = function (req, res) {
    var hola = req.body;
    res.json({
        ok: true,
        hola: hola
    });
};
exports.sendMensaje = sendMensaje;
var sendMensajeV2 = function (req, res) {
    var hola = req.body;
    var id = req.params.id;
    res.json({
        ok: true,
        hola: hola,
        id: id
    });
};
exports.sendMensajeV2 = sendMensajeV2;
