create table ocorrencias(
    idocorrencia int primary key auto_increment,
    nome_acionador varchar(100) not null,
    data date not null,
    setor_ocorrencia varchar(30) not null,
    descricao_ocorrencia text not null,
    nivel enum("baixo", "medio", "alto") not null,
    status_ocorrencia enum("aberto", "em andamento", "resolvido") not null,
    observacao text
);

create table inspecoes(
    idinspecao int primary key auto_increment,
    setor_inspecao varchar(30) not null,
    descricao_inspecao text not null,
    acao text not null,
    status_inspecao enum("aberto", "em andamento", "resolvido") not null,
    data_inspecao datetime
);

create table agenda(
    idagenda int primary key auto_increment,
    titulo_agenda varchar(30) not null,
    data_agenda date not null,
    hora_agenda time not null,
    descricao_agenda text not null

);

create table anotacoes(
    idanotacao int primary key auto_increment,
    nome_anotador varchar(100) not null,
    anotacao text not null
);
