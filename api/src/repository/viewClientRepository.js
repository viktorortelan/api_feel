import database from "./conn.js";

const viewClient = async () => {

  const cmd = `SELECT * FROM tb_cliente`;

  const x = await database.query(cmd, []);
  
  return x[0];

}

export default viewClient;