var database = require("../database/config")

function grafico(fkSensor){
    var instrucaoSql = ` SELECT 
    vazamento AS 'vazamento',
    dataHora AS 'dataHora'
FROM 
    dadosSensores
WHERE
	fkSensores = ${fkSensor}
ORDER BY 
    dataHora;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    grafico
};