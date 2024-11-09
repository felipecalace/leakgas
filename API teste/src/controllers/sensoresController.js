// src/controllers/sensoresController.js

// Exemplo de uma "base de dados" fictícia para os sensores (substitua por banco de dados real)
let sensores = [
    { id: 1, nome: "Sensor A", status: "ativo" },
    { id: 2, nome: "Sensor B", status: "inativo" }
];

// Controller para listar sensores
exports.listar = (req, res) => {
    res.json(sensores);
};

// Controller para adicionar sensor
exports.adicionar = (req, res) => {
    const { nome, status } = req.body;
    
    if (!nome || !status) {
        return res.status(400).json({ error: "Nome e status são obrigatórios" });
    }

    const novoSensor = {
        id: sensores.length + 1,
        nome,
        status
    };

    sensores.push(novoSensor);
    res.status(201).json(novoSensor);
};

// Controller para atualizar sensor
exports.atualizar = (req, res) => {
    const { idSensor } = req.params;
    const { nome, status } = req.body;

    const sensor = sensores.find(s => s.id === parseInt(idSensor));
    if (!sensor) {
        return res.status(404).json({ error: "Sensor não encontrado" });
    }

    if (nome) sensor.nome = nome;
    if (status) sensor.status = status;

    res.json(sensor);
};

// Controller para deletar sensor
exports.deletar = (req, res) => {
    const { idSensor } = req.params;

    const index = sensores.findIndex(s => s.id === parseInt(idSensor));
    if (index === -1) {
        return res.status(404).json({ error: "Sensor não encontrado" });
    }

    sensores.splice(index, 1);
    res.status(204).send(); // Retorna status 204 (No Content) após a exclusão
};
