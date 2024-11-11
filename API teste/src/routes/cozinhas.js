var express = require("express");
var router = express.Router();
var cozinhasController = require("../controllers/cozinhasController");

// Rota para listar cozinhas
router.get("/listar", function (req, res) {
    cozinhasController.listar(req, res);
});

// Rota para adicionar cozinha
router.post("/adicionar", function (req, res) {
    cozinhasController.adicionar(req, res);
});

// Rota para atualizar cozinha
router.put("/atualizar/:idCozinha", function (req, res) {
    cozinhasController.atualizar(req, res);
});

// Rota para deletar cozinha
router.delete("/deletar/:idCozinha", function (req, res) {
    cozinhasController.deletar(req, res);
});

module.exports = router;
