var usuarioModel = require("../models/usuarioModel");
var cozinhaModel = require("../models/cozinhaModel");

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

    // Autenticação do usuário
    usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            console.log(`Resultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

            if (resultadoAutenticar.length === 1) {
                const usuario = resultadoAutenticar[0];

                // Buscando cozinhas associadas à empresa
                cozinhaModel.buscarcozinhasPorEmpresa(usuario.empresaId)
                    .then((resultadocozinhas) => {
                        if (resultadocozinhas.length > 0) {
                            res.json({
                                id: usuario.id,
                                email: usuario.email,
                                nome: usuario.nome,
                                senha: usuario.senha,
                                cozinhas: resultadocozinhas
                            });
                        } else {
                            res.status(204).json({ cozinhas: [] });
                        }
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
            console.error("\nHouve um erro ao realizar o login! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    // Recupera os valores do corpo da requisição
    var { nomeServer, sobrenomeServer, telefoneServer, emailServer, senhaServer, idEmpresaVincularServer: fkEmpresa } = req.body;

    // Validação das entradas
    if (!nomeServer) return res.status(400).send("Seu nome está undefined!");
    if (!emailServer) return res.status(400).send("Seu email está undefined!");
    if (!senhaServer) return res.status(400).send("Sua senha está undefined!");

    // Cadastro do usuário
    usuarioModel.cadastrar(nomeServer, emailServer, senhaServer, fkEmpresa)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.error("\nHouve um erro ao realizar o cadastro! Erro:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    cadastrar
};
