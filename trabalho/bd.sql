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

ocorrencias
+----------------------+-------------------------------------------+------+-----+---------+----------------+
| Field                | Type                                      | Null | Key | Default | Extra          |
+----------------------+-------------------------------------------+------+-----+---------+----------------+
| idocorrencia         | int                                       | NO   | PRI | NULL    | auto_increment |
| nome_acionador       | varchar(100)                              | NO   |     | NULL    |                |
| data                 | date                                      | NO   |     | NULL    |                |
| setor_ocorrencia     | varchar(30)                               | NO   |     | NULL    |                |
| descricao_ocorrencia | text                                      | NO   |     | NULL    |                |
| nivel                | enum('baixo','medio','alto')              | NO   |     | NULL    |                |
| status_ocorrencia    | enum('aberto','em andamento','resolvido') | NO   |     | NULL    |                |
| observacao           | text                                      | YES  |     | NULL    |                |
+----------------------+-------------------------------------------+------+-----+---------+----------------+

create table inspecoes(
    idinspecao int primary key auto_increment,
    setor_inspecao varchar(30) not null,
    descricao_inspecao text not null,
    acao text not null,
    status_inspecao enum("aberto", "em andamento", "resolvido") not null,
    data_inspecao date,
    id_ocorrencia int,
    foreign key (id_ocorrencia) references ocorrencias(idocorrencia)
);
alter table inspecoes
modify data_inspecao date not null;

inspecoes
+--------------------+-------------------------------------------+------+-----+---------+----------------+
| Field              | Type                                      | Null | Key | Default | Extra          |
+--------------------+-------------------------------------------+------+-----+---------+----------------+
| idinspecao         | int                                       | NO   | PRI | NULL    | auto_increment |
| setor_inspecao     | varchar(30)                               | NO   |     | NULL    |                |
| descricao_inspecao | text                                      | NO   |     | NULL    |                |
| acao               | text                                      | NO   |     | NULL    |                |
| status_inspecao    | enum('aberto','em andamento','resolvido') | NO   |     | NULL    |                |
| data_inspecao      | datetime                                  | YES  |     | NULL    |                |
| id_ocorrencia      | int                                       | YES  | MUL | NULL    |                |
+--------------------+-------------------------------------------+------+-----+---------+----------------+

create table agenda(
    idagenda int primary key auto_increment,
    titulo_agenda varchar(30) not null,
    data_agenda date not null,
    hora_agenda time not null,
    descricao_agenda text not null
);

agenda
+------------------+-------------+------+-----+---------+----------------+
| Field            | Type        | Null | Key | Default | Extra          |
+------------------+-------------+------+-----+---------+----------------+
| idagenda         | int         | NO   | PRI | NULL    | auto_increment |
| titulo_agenda    | varchar(30) | NO   |     | NULL    |                |
| data_agenda      | date        | NO   |     | NULL    |                |
| hora_agenda      | time        | NO   |     | NULL    |                |
| descricao_agenda | text        | NO   |     | NULL    |                |
+------------------+-------------+------+-----+---------+----------------+

create table anotacoes(
    idanotacao int primary key auto_increment,
    nome_anotador varchar(100) not null,
    anotacao text not null
);

anotacoes
+---------------+--------------+------+-----+---------+----------------+
| Field         | Type         | Null | Key | Default | Extra          |
+---------------+--------------+------+-----+---------+----------------+
| idanotacao    | int          | NO   | PRI | NULL    | auto_increment |
| nome_anotador | varchar(100) | NO   |     | NULL    |                |
| anotacao      | text         | NO   |     | NULL    |                |
+---------------+--------------+------+-----+---------+----------------+