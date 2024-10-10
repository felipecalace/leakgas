create database leakgas;

use leakgas;

create table cadastro(
    idEmpresa int primary key auto_increment,
    nomeFantasia varchar(50) not null,
    nomeSocial varchar(50) not null,
    CNPJ char(14) not null,
    representanteEmpresa varchar(50),
    emailContato varchar(50),
    unidadesEmpresa int,
    username varchar (20),
    password varchar (20)
);
create table sensores(
    idSensor int primary key auto_increment,
    estadoAtual varchar(10) not null,
    localizacaoSensor varchar(50),
    UnidadeEmpresa varchar(50),
    fkEmpresa int,
    constraint chkEstado check(estadoAtual in('Ativo','Inativo','Manutenção')),
    constraint fkSensorEmpresa foreign key(fkEmpresa) references cadastro(idEmpresa)
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
 'McDonalds',
 'McDonalds Brasil Ltda',
 '12345678000195',
 'João Silva',
 'contato@mcdonalds.com.br',
 100,
 'mcdonalds_user',
 'AmoMuitoTudoIsso'
);

insert into sensores values
(
default,
'Ativo',
'Cozinha',
'Avenida Paulista',
1
);
