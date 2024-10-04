import database from "./conn.js";

const verifyId = async (id) => {

    const cmd = `SELECT * FROM tb_infos_imoveis WHERE id_cardImovel = ?`;

    const x = await database.query(cmd, [id]);

    return x[0];

}

export default verifyId;