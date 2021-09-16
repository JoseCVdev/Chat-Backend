"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mensajeController_1 = require("../controllers/mensajeController");
var router = (0, express_1.Router)();
router.get('/mensajes', mensajeController_1.getMensaje);
router.post('/mensajes', mensajeController_1.sendMensaje);
router.post('/mensajes/:id', mensajeController_1.sendMensajeV2);
exports.default = router;
