var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.email;
    var senha = req.body.password;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idRepresentante,
                            email: resultadoAutenticar[0].email,
                            nome: resultadoAutenticar[0].nome,
                            sobrenome: resultadoAutenticar[0].sobrenome
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
  var { body } = req;
  var requiredKeys = [
    'cnpj',
    'nomeSocial',
    'nomeFantasia',
    'emailEmpresa',
    'telefoneCorp',
    'endereco',
    'numero',
    'cep',
    'estado',
    'cidade',
    'pessoalSobrenome',
    'pessoalNome',
    'pessoalTelefone',
    'pessoalSenha',
    'pessoalConfirmaSenha',
    'email'
  ]

  var errors = requiredKeys.filter((key) => {
    return body[key] == undefined;
  }).map((val) => `Seu ${val} está undefined`);

  if(errors.length > 0) return res.status(400).send(JSON.stringify(errors));

  // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
  usuarioModel
    .cadastrar(body)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    autenticar,
    cadastrar
}