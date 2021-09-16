"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        msg: 'hola'
    });
});
exports.default = router;
