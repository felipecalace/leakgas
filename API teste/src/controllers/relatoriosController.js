// src/controllers/relatoriosController.js

// Exemplo de dados fictícios para relatórios
const sensores = [
    { id: 1, nome: "Sensor A", status: "ativo" },
    { id: 2, nome: "Sensor B", status: "inativo" }
];

const alertas = [
    { id: 1, sensorId: 1, tipo: "vazamento", descricao: "Vazamento detectado na cozinha", timestamp: new Date() },
    { id: 2, sensorId: 2, tipo: "erro", descricao: "Falha no sensor B", timestamp: new Date() }
];

// Gerar um relatório de alertas por sensor
exports.relatorioAlertasPorSensor = (req, res) => {
    const relatorio = sensores.map(sensor => {
        const alertasDoSensor = alertas.filter(al => al.sensorId === sensor.id);
        return {
            sensorId: sensor.id,
            nome: sensor.nome,
            totalAlertas: alertasDoSensor.length,
            alertas: alertasDoSensor
        };
    });

    res.json(relatorio);
};
