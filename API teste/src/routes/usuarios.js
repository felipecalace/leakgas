// Importa o módulo express e cria o roteador
var express = require("express");
var router = express.Router();

// Importa o controlador de usuário
var usuarioController = require("../controllers/usuariosController");

// Rota para cadastrar usuário - direciona a requisição para a função `cadastrar` do usuarioController
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

// Rota para autenticar usuário - direciona a requisição para a função `autenticar` do usuarioController
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Exporta o roteador para uso em outras partes da aplicação
module.exports = router;
