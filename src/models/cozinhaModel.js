var database = require("../database/config")

function puxar(idRepresentante){
    var instrucaoSql = `
    SELECT nome FROM cozinha WHERE fkEmpresa = ${idRepresentante};
`;
    return database.executar(instrucaoSql);
}

module.exports = {
    puxar
};