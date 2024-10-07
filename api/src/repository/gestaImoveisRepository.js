import database from "./conn.js";

export async function GestaoImoveisBuscar() {
    let comando = `
        SELECT tb_infos_imoveis.id_cardImovel   id, 
                tb_infos_imoveis.nm_apartamento  imovel, 
                tb_infos_imoveis.st_status   status, 
                tb_corretores.nm_adm   corretor,
                vendido
        FROM tb_infos_imoveis
        INNER JOIN tb_corretores 
        ON tb_infos_imoveis.corretor_responsavel = tb_corretores.id_corretor;
    `;

    let registro = await database.query(comando);
    let x = registro[0];
    return x
}


export async function vendasSim() {
    let comando = `
        SELECT COUNT(*) AS total_vendidos
        FROM tb_infos_imoveis
        WHERE vendido = TRUE;
    `;

    let registro = await database.query(comando);
    return { total_vendidos: registro[0][0].total_vendidos }; 
}


export async function vendasNao() {
    let comando = `
        SELECT COUNT(*) AS total_nao_vendidos
        FROM tb_infos_imoveis
        WHERE vendido = FALSE;
    `;

    let registro = await database.query(comando);
    return { total_nao_vendidos: registro[0][0].total_nao_vendidos }; 
}


export async function removerImovel(id) {
    let comando = `
        delete from tb_infos_imoveis where id_cardImovel = ?
    `;

    let registro = await database.query(comando, [id]);
    let fim = registro[0]
    return fim.affectedRows;

}


export async function totalImoveis() {
    let comando = `
        SELECT COUNT(*) AS total_imoveis FROM tb_infos_imoveis;
    `;
    let registro = await database.query(comando);
    let fim = registro[0];
    return fim[0];
}


export async function updateVenda(id, vendido) {
    let comando = `
        UPDATE tb_infos_imoveis
        SET vendido = ?
        WHERE id_cardImovel = ?
    `;
    let registro = await database.query(comando, [vendido, id]);
    let fim = registro[0];
    return fim.affectedRows; 
}



