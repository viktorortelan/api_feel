create database feel_good_db;
use feel_good_db;

use feel_good_db;

-- tabela para adicionar as images das informações dos imoveis.

create table  TB_images_Imoveis (
id_img int primary key auto_increment,
img_um varchar(300),
img_dois varchar(300),
img_tres varchar(300),
img_quatro varchar(300)
);



create  table tb_corretores(
id_corretor int primary key auto_increment,
nm_adm varchar(200),
ds_email varchar(200),
ds_senha varchar(200)
);

select*from tb_corretores;

update tb_corretores
set nm_adm = ? ,
	ds_email = ?,
    ds_senha = ?
where id_corretor = ?;


INSERT INTO tb_corretores (nm_adm, ds_email, ds_senha) VALUES
("rola", "rola@fdhsagfhds", "15456");



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
sb_sobre         varchar(4000),
corretor_responsavel INT,
vendido BOOLEAN,
FOREIGN KEY (corretor_responsavel) REFERENCES tb_corretores(id_corretor)
); 

SELECT COUNT(*) AS total_imoveis FROM tb_infos_imoveis;
SELECT COUNT(*) AS total_corretores FROM tb_corretores;
SELECT COUNT(*) AS total_clientes FROM tb_cliente;


SELECT COUNT(*) AS total_vendidos
FROM tb_infos_imoveis
WHERE vendido = TRUE;

SELECT COUNT(*) AS total_nao_vendidos
FROM tb_infos_imoveis
WHERE vendido = FALSE;

select*from tb_infos_imoveis;

SELECT tb_infos_imoveis.id_cardImovel AS ID, 
		tb_infos_imoveis.nm_apartamento AS "Imóvel", 
		tb_infos_imoveis.st_status AS Status, 
		tb_corretores.nm_adm AS Corretor
FROM tb_infos_imoveis
INNER JOIN tb_corretores
ON tb_infos_imoveis.corretor_responsavel = tb_corretores.id_corretor;


SELECT i.id_cardImovel, 
       i.nm_apartamento, 
       i.st_status, 
       i.rg_regiao, 
       i.lc_localizacao, 
       c.nm_adm AS corretor_responsavel
FROM tb_infos_imoveis i
INNER JOIN tb_corretores c
ON i.corretor_responsavel = c.id_corretor;


select * from tb_infos_imoveis;
drop table tb_infos_imoveis;

update tb_infos_imoveis
set vendido = false
where id_cardImovel = 3;

select*from tb_infos_imoveis;
delete from tb_infos_imoveis where id_cardImovel = 1;

drop table tb_infos_imoveis;

create table tb_cliente (
id_cliente int primary key auto_increment,
nm_cliente varchar(200),
ds_email varchar(200) unique,
ds_telefone varchar(50) unique,
dt_cadastro date
);

select * from tb_infos_imoveis;

select * from tb_cliente where id_cliente = ?;

update tb_cliente
set dt_cadastro = "2006-08-03"
where ds_email = "tonin";

select * from tb_cliente;

select*from tb_loginADM;



select * from tb_cliente;

insert into tb_cliente(nm_cliente, ds_email, ds_telefone)
values ('viktor' ,'jvortelan@gmail.com', '11 99999-9999');

drop table tb_cliente;

insert into tb_ADM(nm_nome, em_email, sn_senha)
values ('Viktor Ortelan', 'jvortelan@gmail.com', 'jv20/08');

select * from tb_infos_imoveis;

create table tb_ADM (
id_adm int primary key auto_increment,
nm_adm varchar(200),
ds_email varchar(200),
ds_senha varchar(200)
);

insert into tb_ADM(nm_adm, ds_email, ds_senha)
values ('adm' ,'adm', '1');




