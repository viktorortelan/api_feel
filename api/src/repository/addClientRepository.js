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

export async function updateCliente(nome, email, telefone, id) {
  let comando = `
      UPDATE tb_cliente
      SET nm_cliente = ?,
          ds_email = ?,
          ds_telefone = ?
      WHERE id_cliente = ?
  `;
  
  try {
      console.log(`Atualizando cliente com ID: ${id}`);
      console.log(`Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`);
      
      let [registro] = await database.query(comando, [nome, email, telefone, id]);
      
      return registro.affectedRows;
  } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      throw error;
  }
}


export default addClient;