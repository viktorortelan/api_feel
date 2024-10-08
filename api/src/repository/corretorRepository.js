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

export async function removerCorretor(id) {
    let comando = `
        delete tb_corretores WHERE id_corretor = ?
    `;
    let registro = await database.query(comando, [id]);
    let fim = registro[0];
    return registro.affectedRows;
}


export async function loginCorretor(email, senha) {
    let comando = `
        select id_corretor   id,
                nm_adm    nome,
                ds_email  email
        from tb_corretores
         where ds_email = ? and ds_senha = ?
    `;

    let registro = await database.query(comando, [email, senha]);
    return registro[0];

}
