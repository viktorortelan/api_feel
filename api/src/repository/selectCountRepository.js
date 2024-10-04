import database from "./conn.js";

const selectCount = async () => {
    const cmd = `SELECT * FROM tb_corretores`;
    const x = await database.query(cmd, []);
    return x[0];
}

export default selectCount;