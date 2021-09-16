import express from 'express';
import cors from "cors";
require('dotenv').config()

import mensajeRoutes from "./routes/mensaje.routes";
import * as socket from './sockets/sockets';
// import { Socket } from 'socket.io';

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200'],
        credentials: true
    }
});

app.use(express.json())
app.use(cors());

// routes
app.use("/api", mensajeRoutes);


io.on("connection", (cliente: any) => {
    console.log('Cliente Conectado');

    // Desconectar Socket
    socket.desconectar(cliente);
    socket.mensaje(cliente, io);

})



const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Run server on port: ${PORT}`);
});

