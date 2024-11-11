var express = require("express");
var router = express.Router();
var alertasController = require("../controllers/alertasController");

// Rota para listar alertas
router.get("/listar", function (req, res) {
    alertasController.listar(req, res);
});

// Rota para criar alerta
router.post("/criar", function (req, res) {
    alertasController.criar(req, res);
});

// Rota para atualizar alerta
router.put("/atualizar/:idAlerta", function (req, res) {
    alertasController.atualizar(req, res);
});

// Rota para deletar alerta
router.delete("/deletar/:idAlerta", function (req, res) {
    alertasController.deletar(req, res);
});

module.exports = router;
