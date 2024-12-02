var usuarioModel = require("../models/usuarioModel");

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
    'logradouro',
    'complemento',
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

function cadastrarAgendamento(req, res){
    var idUsuario = req.body.idUsuarioServer
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var cpf = req.body.cpfServer;
    var telefone = req.body.telefoneServer;
    var cidade = req.body.cidadeServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var numero = req.body.numeroServer;
    var data = req.body.dataServer;
    var horariode = req.body.horarioDeServer;
    var horarioate = req.body.horarioAteServer;
    var telefone = req.body.telefoneServer;
    var idUsuario = req.body.idUsuarioServer
    
    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    }else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }else if (cidade == undefined) {
        res.status(400).send("Seu cidade está undefined!");
    }else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    }else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    }else if (data == undefined) {
        res.status(400).send("Sua data está undefined!");
    }else if (horariode == undefined) {
        res.status(400).send("Seu horariode está undefined!");
    }else if (horarioate == undefined) {
        res.status(400).send("Seu horarioate está undefined!");
    }else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarAgendamento(idUsuario, nome, email, cpf, telefone, cidade, cep, logradouro, numero, data, horariode, horarioate, telefone, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    autenticar,
    cadastrar,
    cadastrarAgendamento
}