import database from "./conn.js";

const addClient = async (data, email ) => {

  const cmd = `
              update tb_cliente
              set dt_cadastro = ?
              where ds_email = ?  
  `;

  const x = await database.query(cmd, [data, email]);
  let registro = x[0];
  return registro.affectedRows;
  
}

export default addClient;