var express = require("express");
var router = express.Router();
var empresaController = require("../controllers/empresaController");

// Rota para cadastrar uma nova empresa
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
});

// Rota para buscar uma empresa por CNPJ
router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

// Rota para buscar uma empresa pelo ID
router.get("/buscar/:id", function (req, res) {
    empresaController.buscarPorId(req, res);
});

// Rota para listar todas as empresas
router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

module.exports = router;
