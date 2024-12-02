var cozinhaModel = require("../models/cozinhaModel");

function puxar(req, res){
    var idRepresentante = sessionStorage.ID_USUARIO
    console.log(idRepresentante)
    cozinhaModel.puxar(idRepresentante)
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
    puxar
}