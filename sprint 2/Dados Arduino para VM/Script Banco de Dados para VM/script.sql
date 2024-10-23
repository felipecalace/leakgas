create database leakgas;

use leakgas;

create table cadastro(
    idRepresentante int primary key auto_increment,
    nome varchar(50),
    sobrenome varchar(50),
    telefone char(12),
    emailLogin varchar(50),
    senha varchar(20)
);
create table empresaMatriz(
    idEmpresa int auto_increment,
    nomeFantasia varchar(50) not null,
    nomeSocial varchar(50) not null,
    CNPJ char(14) not null,
    emailCorporativo varchar(50),
    telefoneCorporativo char(12),
    unidadesEmpresa int,
    enderecoCompleto varchar(255),
    cep char(8),
    complemento varchar(45),
    cidade varchar(45),
    estado varchar(45),
    pais varchar(25),
    fkRepresentante int,
    constraint fkCadastroEmpresa foreign key(fkRepresentante) references cadastro(idRepresentante),
    primary key(idEmpresa, fkRepresentante)
);

create table sensores(
    idSensor int auto_increment,
    estadoAtual varchar(10) not null,
    localizacaoSensor varchar(50),
    UnidadeEmpresa varchar(50),
    fkEmpresa int,
    constraint chkEstado check(estadoAtual in('Ativo','Inativo','Manutenção')),
    constraint fkSensorEmpresa foreign key(fkEmpresa) references empresaMatriz(idEmpresa),
    primary key(idSensor, fkEmpresa)
);

create table dadosSensores(
    idDado int primary key auto_increment,
    fkSensores int,
    vazamento int not null,
    dataHora datetime default current_timestamp,
        constraint fkDadoSensor foreign key(fkSensores) references sensores(idSensor)
);

create table propaganda(
idEmail int primary key auto_increment,
emailPropaganda varchar(50)
);

insert into cadastro values(
    default,
    'João',
    'Silva',
    '123456780001',
    'contato@mcdonalds.com.br',
    'AmoMuitoTudoIsso'
);

insert into empresaMatriz values(
    default,
    'Arcos Dorados',
    'McDonalds Brasil Ltda',
    '12345678000195',
    'contato@mcdonalds.com.br',
    '123456780001',
    100,
    'Avenida Paulista, 100',
    '01310100',
    'Sala 100',
    'São Paulo',
    'São Paulo',
    'Brasil',
    1  
);

insert into sensores values(
    default,
    'Ativo',
    'Cozinha',
    'Avenida Paulista',
    1  
);

insert into propaganda values(
    default,
    'contato@mcdonalds.com.br'
);