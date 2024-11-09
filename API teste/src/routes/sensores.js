var express = require("express");
var router = express.Router();
var sensoresController = require("../controllers/sensoresController");

// Rota para listar sensores
router.get("/listar", function (req, res) {
    sensoresController.listar(req, res);
});

// Rota para adicionar sensor
router.post("/adicionar", function (req, res) {
    sensoresController.adicionar(req, res);
});

// Rota para atualizar sensor
router.put("/atualizar/:idSensor", function (req, res) {
    sensoresController.atualizar(req, res);
});

// Rota para deletar sensor
router.delete("/deletar/:idSensor", function (req, res) {
    sensoresController.deletar(req, res);
});

module.exports = router;
