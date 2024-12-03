var database = require("../database/config")

function grafico(fkSensor){
    var instrucaoSql = ` SELECT 
    vazamento AS 'Porcentagem de Vazamento',
    dataHora AS 'Data Hora'
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