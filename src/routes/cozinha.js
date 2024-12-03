var express = require("express");
var router = express.Router();

var cozinhaController = require("../controllers/cozinhaController.js");

router.get("/puxar/:idCozinha", function (req, res){
    cozinhaController.puxar(req, res)
})

router.get("/grafico/:fkSensores", function (req,res){
    cozinhaController.grafico(req,res)
})

 
module.exports = router;