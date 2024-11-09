// src/controllers/alertasController.js
let alertas = [];

// Controller para listar todos os alertas
exports.listar = (req, res) => {
    res.json(alertas);
};

// Controller para adicionar um alerta
exports.adicionar = (req, res) => {
    const { sensorId, tipo, descricao } = req.body;
    
    if (!sensorId || !tipo || !descricao) {
        return res.status(400).json({ error: "SensorId, Tipo e Descrição são obrigatórios" });
    }

    const novoAlerta = {
        id: alertas.length + 1,
        sensorId,
        tipo,
        descricao,
        timestamp: new Date()
    };

    alertas.push(novoAlerta);
    res.status(201).json(novoAlerta);
};

// Controller para deletar um alerta
exports.deletar = (req, res) => {
    const { idAlerta } = req.params;

    const index = alertas.findIndex(a => a.id === parseInt(idAlerta));
    if (index === -1) {
        return res.status(404).json({ error: "Alerta não encontrado" });
    }

    alertas.splice(index, 1);
    res.status(204).send(); // Retorna status 204 (No Content) após a exclusão
};
