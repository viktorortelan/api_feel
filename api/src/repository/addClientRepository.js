import database from "./conn.js";

const addClient = async ( nm_nome, em_email, tl_telefone, dt_cadastro ) => {

  const cmd = `INSERT INTO tb_cliente (nm_nome, em_email, tl_telefone, dt_cadastro) VALUES (?, ?, ?, ?)`;

  const x = await database.query(cmd, [nm_nome, em_email, tl_telefone, dt_cadastro]);

  return x[0];

}

export default addClient;