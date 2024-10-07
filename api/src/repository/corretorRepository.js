import database from "./conn.js";




export async function buscarCorretor() {
    let comando = `
        select*from tb_corretores;
    `;
    let registro = await database.query(comando);
    let fim = registro[0];
    return fim;
}

export async function totalCorretor() {
    let comando = `
        SELECT COUNT(*) AS total_corretores FROM tb_corretores;
    `;
    let registro= await database.query(comando);
    let fim = registro[0];
    return fim[0];
}