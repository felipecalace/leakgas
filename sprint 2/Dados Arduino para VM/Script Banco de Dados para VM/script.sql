-- Cria o banco de dados chamado 'leakgas'
CREATE DATABASE leakgas;

-- Utiliza o banco de dados recém-criado
USE leakgas;

-- Cria uma tabela para representantes
CREATE TABLE cadastro (
    idRepresentante INT PRIMARY KEY AUTO_INCREMENT,  
    nome VARCHAR(50),                                
    sobrenome VARCHAR(50),                           
    telefone CHAR(12),                              
    emailLogin VARCHAR(50),                         
    senha VARCHAR(20)                               
);

-- Cria uma tabela para a empresa matriz
CREATE TABLE empresaMatriz (
    idEmpresa INT AUTO_INCREMENT,                   
    nomeFantasia VARCHAR(50) NOT NULL,              
    nomeSocial VARCHAR(50) NOT NULL,                
    CNPJ CHAR(14) NOT NULL,                         
    emailCorporativo VARCHAR(50),                   
    telefoneCorporativo CHAR(12),                                         
    enderecoCompleto VARCHAR(255),                
    cep CHAR(8),                                  
    complemento VARCHAR(45),                      
    cidade VARCHAR(45),                           
    estado VARCHAR(45),                           
    pais VARCHAR(25),                             
    fkRepresentante INT,                          
    CONSTRAINT fkCadastroEmpresa FOREIGN KEY (fkRepresentante) REFERENCES cadastro(idRepresentante), 
    PRIMARY KEY (idEmpresa, fkRepresentante)       
);

-- Cria uma tabela para sensores
CREATE TABLE sensores (
    idSensor INT AUTO_INCREMENT,                  
    estadoAtual VARCHAR(10) NOT NULL,             
    localizacaoSensor VARCHAR(50),                
    UnidadeEmpresa VARCHAR(50),                   
    fkEmpresa INT,                                
    CONSTRAINT chkEstado CHECK (estadoAtual IN ('Ativo', 'Inativo', 'Manutenção')), 
    CONSTRAINT fkSensorEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresaMatriz(idEmpresa),  
    PRIMARY KEY (idSensor, fkEmpresa)               
);

-- Cria uma tabela para dados dos sensores
CREATE TABLE dadosSensores (
    idDado INT AUTO_INCREMENT,                       
    fkSensores INT,                                  
    vazamento INT NOT NULL,                          
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,     
    CONSTRAINT fkDadoSensor FOREIGN KEY (fkSensores) REFERENCES sensores(idSensor),  
    PRIMARY KEY (idDado, fkSensores)                
);

-- Cria uma tabela para propaganda via email
CREATE TABLE propaganda (
    idEmail INT PRIMARY KEY AUTO_INCREMENT,          
    emailPropaganda VARCHAR(50)                      
);

-- Insere um representante na tabela cadastro
INSERT INTO cadastro VALUES (
    DEFAULT,                                         
    'João',                                         
    'Silva',                                        
    '123456780001',                                 
    'contato@mcdonalds.com.br',                     
    'AmoMuitoTudoIsso'                             
);

-- Insere uma empresa na tabela empresaMatriz
INSERT INTO empresaMatriz VALUES (
    DEFAULT,
    'Arcos Dorados',
    'McDonalds Brasil Ltda', 
    '12345678000195', 
    'contato@mcdonalds.com.br', 
    '123456780001',  
    'Rua dos Arcos, 123', 
    '12345678', 
    'Sala 123', 
    'São Paulo', 
    'SP', 
    'Brasil', 
    1
    );

-- Insere um sensor na tabela sensores
INSERT INTO sensores VALUES (
    DEFAULT,
    'Ativo', 
    'Entrada Principal', 
    'Unidade São Paulo', 
    1
    );

-- Insere um email de propaganda na tabela propaganda
    INSERT INTO propaganda (emailPropaganda) 
    VALUES ('contato@mcdonalds.com.br');