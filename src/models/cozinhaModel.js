var database = require("../database/config")

function grafico(idCozinha){
    var instrucaoSql = ` SELECT 
    DATE(createdAt) AS createdAt,
    COUNT(CASE WHEN sentimento = 1 THEN 1 END) AS contagem_true,
    COUNT(CASE WHEN sentimento = 0 THEN 1 END) AS contagem_false
FROM 
    analises
WHERE
	fkCozinha = ${idCozinha}
GROUP BY 
    DATE(createdAt)
ORDER BY 
    DATE(createdAt);
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    grafico
};