var express = require("express");
var router = express.Router();
var relatoriosController = require("../controllers/relatoriosController");

// Rota para gerar relatório geral
router.get("/geral", function (req, res) {
    relatoriosController.geral(req, res);
});

// Rota para gerar relatório específico
router.get("/especifico/:idEmpresa", function (req, res) {
    relatoriosController.especifico(req, res);
});

module.exports = router;
