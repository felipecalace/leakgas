-- Cria o banco de dados chamado 'leakgas'

CREATE DATABASE IF NOT EXISTS leakgas;
-- Utiliza o banco de dados recém-criado

USE leakgas;

-- Cria uma tabela para representante

CREATE TABLE IF NOT EXISTS representante (
    idRepresentante INT PRIMARY KEY AUTO_INCREMENT,  
    nome VARCHAR(50),                                
    sobrenome VARCHAR(50),                           
    telefone CHAR(12),                              
    email VARCHAR(50),                         
    senha VARCHAR(20)                               
);

-- Cria uma tabela para a empresa matriz

CREATE TABLE IF NOT EXISTS empresa (
    idEmpresa INT AUTO_INCREMENT,                   
    nomeFantasia VARCHAR(50) NOT NULL,              
    nomeSocial VARCHAR(50) NOT NULL,                
    CNPJ CHAR(14) NOT NULL,                         
    emailCorporativo VARCHAR(50),                   
    telefoneCorporativo CHAR(12),                                         
    fkRepresentante INT,                      
    CONSTRAINT fkrepresentanteEmpresa FOREIGN KEY (fkRepresentante) REFERENCES representante(idRepresentante), 
    PRIMARY KEY (idEmpresa, fkRepresentante)       
);

-- Tabela para cozinhas

CREATE TABLE IF NOT EXISTS cozinha(
    idCozinha INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    fkEmpresa INT,
    FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa)
);

-- Cria uma tabela para o endereço da empresa


CREATE TABLE IF NOT EXISTS endereco (
    idEndereco INT AUTO_INCREMENT,
    logradouro VARCHAR(45),
    numero VARCHAR(6),           
    cep CHAR(8),                                  
    complemento VARCHAR(45),                      
    cidade VARCHAR(45),                           
    estado VARCHAR(45),                           
    fkCozinha INT,
    FOREIGN KEY (fkCozinha) REFERENCES cozinha(idCozinha),
    PRIMARY KEY(idEndereco, fkCozinha)
);

-- Cria uma tabela para sensores

CREATE TABLE IF NOT EXISTS sensores (
    idSensor INT AUTO_INCREMENT,                  
    estadoAtual VARCHAR(10) NOT NULL,                                         
    fkCozinha INT,                                
    CONSTRAINT chkEstado CHECK (estadoAtual IN ('Ativo', 'Inativo', 'Manutenção')), 
    FOREIGN KEY (fkCozinha) REFERENCES cozinha(idCozinha),  
    PRIMARY KEY (idSensor, fkCozinha)               
);

-- Cria uma tabela para dados dos sensores

CREATE TABLE IF NOT EXISTS dadosSensores (
    idDado INT AUTO_INCREMENT,                       
    fkSensores INT,                                  
    vazamento FLOAT(5,2) NOT NULL,                          
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,     
    CONSTRAINT fkDadoSensor FOREIGN KEY (fkSensores) REFERENCES sensores(idSensor),  
    PRIMARY KEY (idDado, fkSensores)                
);


-- Cria uma tabela para contato via email

CREATE TABLE IF NOT EXISTS faleConosco (
    idEmail INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(25),
    mensagem VARCHAR(500),          
    emailContato VARCHAR(50) NOT NULL,
    tipo VARCHAR(20) NOT NULL,
    CONSTRAINT chkTipo CHECK(tipo in('FaleConosco','Publicidade'))
);

-- Tabela para chamados para instalação

CREATE TABLE IF NOT EXISTS chamadoInstalacao(
idChamado int auto_increment primary key,
fkRepresentante int,
nome varchar(45),
cpf char(11),
email varchar(45),
telefone char(11),
cidade varchar(45),
cep char(8),
logradouro varchar(45),
numero int,
dia varchar(45),
horarioDe varchar(45),
horarioAte varchar(45),
constraint fkDoRepresentante foreign key (fkRepresentante) references representante(idRepresentante)
);