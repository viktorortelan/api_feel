import database from "./conn.js";

const addImoveis = async ( nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre ) => {

  const cmd = `INSERT INTO tb_infos_imoveis (nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const x = await database.query(cmd, [nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre]);

  return x[0];

}

export default addImoveis;