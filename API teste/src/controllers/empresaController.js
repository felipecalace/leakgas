var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  if (!cnpj) {
    return res.status(400).json({ mensagem: "CNPJ é obrigatório." });
  }

  empresaModel.buscarPorCnpj(cnpj)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(404).json({ mensagem: "Empresa não encontrada." });
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar por CNPJ:", erro);
      res.status(500).json({ mensagem: "Erro interno do servidor." });
    });
}

function listar(req, res) {
  empresaModel.listar()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch((erro) => {
      console.error("Erro ao listar empresas:", erro);
      res.status(500).json({ mensagem: "Erro interno do servidor." });
    });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  if (!id) {
    return res.status(400).json({ mensagem: "ID é obrigatório." });
  }

  empresaModel.buscarPorId(id)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(404).json({ mensagem: "Empresa não encontrada." });
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar por ID:", erro);
      res.status(500).json({ mensagem: "Erro interno do servidor." });
    });
}

function cadastrar(req, res) {
  var { cnpj, razaoSocial } = req.body;

  if (!cnpj || !razaoSocial) {
    return res.status(400).json({ mensagem: "CNPJ e Razão Social são obrigatórios." });
  }

  empresaModel.buscarPorCnpj(cnpj)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(409).json({ mensagem: `A empresa com o CNPJ ${cnpj} já existe.` });
      } else {
        empresaModel.cadastrar(razaoSocial, cnpj)
          .then((resultado) => {
            res.status(201).json(resultado);
          })
          .catch((erro) => {
            console.error("Erro ao cadastrar empresa:", erro);
            res.status(500).json({ mensagem: "Erro interno do servidor." });
          });
      }
    })
    .catch((erro) => {
      console.error("Erro ao verificar CNPJ:", erro);
      res.status(500).json({ mensagem: "Erro interno do servidor." });
    });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
