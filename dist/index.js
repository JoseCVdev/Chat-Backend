"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require('dotenv').config();
var mensaje_routes_1 = __importDefault(require("./routes/mensaje.routes"));
var socket = __importStar(require("./sockets/sockets"));
// import { Socket } from 'socket.io';
var app = (0, express_1.default)();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200'],
        credentials: true
    }
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use("/api", mensaje_routes_1.default);
io.on("connection", function (cliente) {
    console.log('Cliente Conectado');
    // Desconectar Socket
    socket.desconectar(cliente);
    socket.mensaje(cliente, io);
});
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
    console.log("Run server on port: " + PORT);
});
