create database feel_good_db;

drop database feel_good_db;

use feel_good_db;

-- tabela para adicionar as images das informações dos imoveis.

create table TB_images_Imoveis (
id_img int primary key auto_increment,
img_um varchar(300),
img_dois varchar(300),
img_tres varchar(300),
img_quatro varchar(300)
);

-- tabela de informações dos imoveis junto com a chave estrageira para pegar as imagens.

create table tb_infos_imoveis (
id_cardImovel     int primary key auto_increment,
nm_imagem         varchar(200),
nm_galeria		   varchar(200),
nm_apartamento     varchar(250) unique,
st_status         varchar(250),
rg_regiao         varchar(250),
lc_localizacao     varchar(250),
st_suites         varchar(250),
com_tamanho     varchar(250),
vg_vagas         varchar(250),
tt_titulo         varchar(200),
sb_sobre         varchar(4000)
); 

drop table tb_infos_imoveis;

create table tb_cadastro_cliente (
id_cliete int primary key auto_increment,
nm_nome varchar(200),
em_email varchar(200) unique,
tl_telefone varchar(50) unique,
dt_cadastro date
);

select * from tb_cadastro_cliente;

drop table tb_cadastro_cliente;

create table tb_loginADM (
id_adm int primary key auto_increment,
nm_nome varchar(200),
em_email varchar(200) unique,
sn_senha varchar(50) unique
);

insert into tb_loginADM(nm_nome, em_email, sn_senha)
values ('Viktor Ortelan', 'jvortelan@gmail.com', 'jv20/08');

select * from tb_infos_imoveis;

