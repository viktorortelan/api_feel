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

export async function updateCorretor(nome, email, senha, id) {
    let comando = `
        UPDATE tb_corretores
        SET nm_adm = ?,
            ds_email = ?,
            ds_senha = ?
        WHERE id_corretor = ?
    `;
    
    try {
        let [registro] = await database.query(comando, [nome, email, senha, id]);
        
        return registro.affectedRows;
    } catch (error) {
      
        console.error('Erro ao atualizar corretor:', error);
        throw error; 
    }
}
