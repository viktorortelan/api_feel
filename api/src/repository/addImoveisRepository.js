import database from "./conn.js";

const addImoveis = async ( nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel, vendido) => {

  const cmd = `INSERT INTO tb_infos_imoveis (nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel, vendido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const x = await database.query(cmd, [nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel, vendido]);
  const id = x[0];
  return id.insertId;

}

export default addImoveis;