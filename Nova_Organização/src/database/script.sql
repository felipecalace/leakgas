-- Cria o banco de dados chamado 'leakgas'

CREATE DATABASE leakgas;

-- Utiliza o banco de dados recém-criado

USE leakgas;

-- Cria uma tabela para representante

CREATE TABLE representante (
    idRepresentante INT PRIMARY KEY AUTO_INCREMENT,  
    nome VARCHAR(50),                                
    sobrenome VARCHAR(50),                           
    telefone CHAR(12),                              
    emailLogin VARCHAR(50),                         
    senha VARCHAR(20)                               
);

-- Cria uma tabela para a empresa matriz

CREATE TABLE empresa (
    idEmpresa INT AUTO_INCREMENT,                   
    nomeFantasia VARCHAR(50) NOT NULL,              
    nomeSocial VARCHAR(50) NOT NULL,                
    CNPJ CHAR(14) NOT NULL,                         
    emailCorporativo VARCHAR(50),                   
    telefoneCorporativo CHAR(12),                                         
    fkRepresentante INT,
    fkMatriz INT,
    CONSTRAINT fkMatrizEmpresa FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa),                           
    CONSTRAINT fkrepresentanteEmpresa FOREIGN KEY (fkRepresentante) REFERENCES representante(idRepresentante), 
    PRIMARY KEY (idEmpresa, fkRepresentante)       
);

-- Cria uma tabela para o endereço da empresa

CREATE TABLE endereco (
    idEndereco INT,
    numero VARCHAR(6),           
    cep CHAR(8),                                  
    complemento VARCHAR(45),                      
    cidade VARCHAR(45),                           
    estado VARCHAR(45),                           
    fkEmpresa INT,
    CONSTRAINT fkEnderecoEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
    PRIMARY KEY(idEndereco, fkEmpresa)
);

-- Cria uma tabela para sensores

CREATE TABLE sensores (
    idSensor INT AUTO_INCREMENT,                  
    estadoAtual VARCHAR(10) NOT NULL,             
    localizacaoSensor VARCHAR(50),                            
    fkCozinhaEmpresa INT,                                
    CONSTRAINT chkEstado CHECK (estadoAtual IN ('Ativo', 'Inativo', 'Manutenção')), 
    CONSTRAINT fkSensorEmpresa FOREIGN KEY (fkCozinhaEmpresa) REFERENCES empresa(idEmpresa),  
    PRIMARY KEY (idSensor, fkCozinhaEmpresa)               
);

-- Cria uma tabela para dados dos sensores

CREATE TABLE dadosSensores (
    idDado INT AUTO_INCREMENT,                       
    fkSensores INT,                                  
    vazamento FLOAT(5,2) NOT NULL,                          
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,     
    CONSTRAINT fkDadoSensor FOREIGN KEY (fkSensores) REFERENCES sensores(idSensor),  
    PRIMARY KEY (idDado, fkSensores)                
);

-- Cria uma tabela para contato via email

CREATE TABLE faleConosco (
    idEmail INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(25),
    mensagem VARCHAR(500),          
    emailContato VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    CONSTRAINT chkTipo CHECK(tipo in('FaleConosco','Publicidade'))
);

-- Insere um representante na tabela representante

INSERT INTO representante VALUES (
    DEFAULT,
    'Ricardo ', 
    'Silva', 
    '11987654321', 
    'ricardo.silva@gmail.com', 
    'senha123'
    ),
    (
    DEFAULT,
    'Ana', 
    'Lima', 
    '11987654322', 
    'ana.lima@gmail.com', 
    'senha123'
    ),
    (
    DEFAULT,
    'Luiz', 
    'Fernandes', 
    '11987654323', 
    'luiz.fernandes@gmail.com', 
    'senha123'
    );

-- Insere uma empresa na tabela empresaMatriz

INSERT INTO empresa VALUES (
    DEFAULT,
    'Bakelita', 
    'Bakelita Ltda', 
    '12345678901234', 
    'contato@bakelita.com', 
    '11987654321', 
    1, 
    NULL
    ),
    (
    DEFAULT,
    'Frigorífico São Paulo', 
    'Frigorífico São Paulo Ltda', 
    '98765432109876', 
    'contato@frigorificosp.com', 
    '11987654322', 
    2, 
    NULL
    ),
    (
    DEFAULT,
    'Cozinha Industrial Paulista', 
    'Cozinha Industrial Paulista Ltda', 
    '76543210987654', 
    'contato@cozinhapaulista.com', 
    '11987654323', 
    3, 
    NULL
    );

-- Insere um sensor na tabela sensores

INSERT INTO sensores VALUES (
    DEFAULT,
    'Ativo', 
    'Cozinha', 
    1
    ),
    (
    DEFAULT,
    'Inativo', 
    'Próximo aos botijões', 
    2
    ),
    (
    DEFAULT,
    'Manutenção', 
    'Cozinha 2', 
    3
    );

-- Insere um email de propaganda na tabela propaganda

INSERT INTO faleConosco VALUES (
    DEFAULT,
    'Ricardo Silva', 
    'Olá, gostaria de saber mais sobre os produtos da LeakGas.', 
    'ricardo.silva@email.com', 
    'FaleConosco'
    ),
    (
    DEFAULT,
    'Ana Lima', 
    'Gostaria de saber mais sobre as oportunidades de trabalho na LeakGas São Paulo.', 
    'ana.lima@email.com', 
    'FaleConosco'
    ),
    (
    DEFAULT,
    NULL, 
    NULL,
    'luiz.fernandes@email.com', 
    'Publicidade'
    );