var express = require("express");
var router = express.Router();

var cozinhaController = require("../controllers/cozinhaController.js");

router.get("/grafico", function (req, res){
    cozinhaController.grafico(req, res)
})

module.exports = router;