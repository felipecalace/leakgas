var cozinhaModel = require("../models/cozinhaModel");

function grafico(req, res){
    var idCozinha = req.query.idCozinha
    
    cozinhaModel.grafico(idCozinha)
        .then(
            function (resultado){
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao puxar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    grafico
}