var usuarioModel = require("../models/usuarioModel");
var cozinhasModel = require("../models/cozinhaModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Validações de entrada
    if (!email) {
        return res.status(400).send("Seu email está undefined!");
    }
    if (!senha) {
        return res.status(400).send("Sua senha está indefinida!");
    }

    // Autenticação
    usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            console.log(`Resultados encontrados: ${resultadoAutenticar.length}`);
            if (resultadoAutenticar.length === 1) {
                const usuario = resultadoAutenticar[0];
                cozinhasModel.buscarcozinhasPorEmpresa(usuario.empresaId)
                    .then((resultadocozinhass) => {
                        res.json({
                            id: usuario.id,
                            email: usuario.email,
                            nome: usuario.nome,
                            senha: usuario.senha,
                            cozinhas: resultadocozinhas.length > 0 ? resultadocozinhass : []
                        });
                    })
                    .catch((erro) => {
                        console.error("Erro ao buscar cozinhas:", erro);
                        res.status(500).send("Erro ao buscar cozinhas.");
                    });
            } else if (resultadoAutenticar.length === 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }
        })
        .catch(function (erro) {
            console.log("\nHouve um erro ao realizar o login! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    // Recupera os valores do corpo da requisição
    var { nome, email, senha, idEmpresaVincularServer: fkEmpresa, cpfServer: cpf } = req.body;

    // Validação de entradas
    if (!nome) return res.status(400).send("Seu nome está undefined!");
    if (!email) return res.status(400).send("Seu email está undefined!");
    if (!senha) return res.status(400).send("Sua senha está undefined!");
    if (!fkEmpresa) return res.status(400).send("Sua empresa a vincular está undefined!");
    if (!cpf) return res.status(400).send("Seu CPF está undefined!");

    // Cadastro do usuário
    usuarioModel.cadastrar(nome, email, senha, fkEmpresa, cpf)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("\nHouve um erro ao realizar o cadastro! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
