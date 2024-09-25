CREATE DATABASE sprint1;
USE sprint1;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
empresa VARCHAR(100),
login varchar(50),
senha varchar(50),
tipoUsuario varchar(50),
dtCadastro date
CONSTRAINT chkTipo
		CHECK(tipoUsuario IN('Cliente', 'Colaborador'))
); 

INSERT INTO usuario VALUES
(default, 'Outback Steakhouse Restaurantes', 'leo@outback.br', 'madero1000@', 'Cliente', '2024-03-20'),
(default, 'Madero Steak House','amanada@madero.br', 'outback1000', 'Cliente', '2024-08-12'),
(default, 'Terraço Itália Restaurante', 'victor@terraco.br', 'terraco1000', 'Cliente', '2024-04-05'),
(default, 'LeakGas','danilo@leakgas.sp', 'leakgas100', 'Colaborador', '2024-01-01'),
(default, 'LeakGas','endreu@leakgas.sp', 'leakgas200', 'Colaborador', '2024-01-01'),
(default, 'LeakGas', 'fabio@leakgas.sp', 'leakgas300', 'Colaborador', '2024-01-01'),
(default, 'LeakGas', 'matias@leakgas.sp', 'leakgas400', 'colaborador', '2024-02-03');

SELECT * FROM usuario;

SELECT id, login FROM usuario
	WHERE empresa LIKE '%Madero%';
    
SELECT id FROM usuario
	WHERE empresa = 'LeakGas' order by dtCadastro DESC;
    
DELETE FROM usuario 
WHERE id = 7;

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nomeEmpresa varchar(100),
cnpj char(14),
endereco VARCHAR(100),
email VARCHAR(50),
ultimaManutencao datetime
);

INSERT INTO empresa VALUES
(default, 'Outback', '17261661017734', 'Rua A, 100, São Paulo - SP', 'outback@sp.br','2024-08-02 10:13'),
(default, 'Madero', '18270440000124', 'Rua B, 200, Diadema - SP', 'madero@so.br', '2024-07-27 13:10'),
(default, 'Terraço Itália', '60442290000155', 'Rua C, 300, São Paulo - SP', 'terracoitalia@sp.br', '2024-07-30 14:26');

SELECT * FROM empresa;

SELECT cnpj, ultimaManutencao FROM empresa
	WHERE nomeEmpresa LIKE 'M%';
    
UPDATE empresa SET email = 'terraco@italia.sp.br'
	WHERE idEmpresa = 3;
    
SELECT * FROM empresa;

CREATE TABLE manutencao (
idManutencao INT PRIMARY KEY AUTO_INCREMENT,
responsavel varchar(50),
descricao varchar(500),
empresa varchar(50),
dtManutencao datetime
);

INSERT INTO manutencao VALUES
(default, 'Danilo', 'Sistema calibrado e ajustado de acordo com o manuel. Disponível e eficiente para o uso', 'Outback', '2024-08-02 10:13'),
(default, 'Endreu', 'Sistema estava com baixa performance por conta do atraso da manutenção. Sistema reajustado e efeiciente para o uso', 'Madero','2024-07-27 13:10'),
(default, 'Fabio', 'Sistema ajustado e calibrado, disponível para utilização de forma eficiente', 'Terraço Itália', '2024-07-30 14:26');

SELECT * FROM manutencao;

SELECT empresa, descricao FROM manutencao
	WHERE idManutencao = 2;
    
UPDATE manutencao SET dtManutencao = '2024-09-10 11:10'
	WHERE idManutencao = 1;
    
UPDATE manutencao SET dtManutencao = '2024-08-30 14:15'
	WHERE idManutencao = 2;
    
UPDATE manutencao SET dtManutencao = '2024-08-30 14:15'
	WHERE idManutencao = 3;
    
   SELECT * FROM manutencao; 

CREATE TABLE dadoSensor (
idSensor INT PRIMARY KEY AUTO_INCREMENT,
porcentagem INT,
coletadoEm DATETIME,
empresa VARCHAR(50)
);

INSERT INTO dadoSensor VALUES
(default, 15, '2024-04-09 10:13', 'Madero'),
(default, 44, '2024-03-25 16:14', 'Terraço Itália'),
(default, 69, '2024-03-06 13:10', 'Outback'),
(default, 5, '2024-07-27 13:10', 'Madero'),
(default, 74, '2024-07-30 14:26', 'Terraço Itália'),
(default, 54, '2024-08-02 10:13', 'Outback');

SELECT * FROM dadoSensor;

SELECT empresa, porcentagem, coletadoEm FROM dadoSensor
	WHERE porcentagem >= 50;
    
SELECT * FROM dadoSensor
	WHERE empresa LIKE '%A%' ORDER BY porcentagem ASC;