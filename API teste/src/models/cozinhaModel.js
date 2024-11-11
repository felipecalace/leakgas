var database = require("../database/config");

function buscarCozinhasPorEmpresa(empresaId) {
  // A consulta SQL para buscar as cozinhas de uma empresa
  var instrucaoSql = `SELECT * FROM cozinha WHERE fk_empresa = ?`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql, [empresaId]);
}

function cadastrar(empresaId, descricao) {
  // A consulta SQL para cadastrar uma nova cozinha
  var instrucaoSql = `INSERT INTO cozinha (descricao, fk_empresa) VALUES (?, ?)`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql, [descricao, empresaId]);
}

module.exports = {
  buscarCozinhasPorEmpresa,
  cadastrar
};
