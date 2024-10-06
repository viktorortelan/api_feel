import database from "./conn.js";

export async function GestaoImoveisBuscar() {
    let comando = `
        SELECT tb_infos_imoveis.id_cardImovel   id, 
                tb_infos_imoveis.nm_apartamento  imovel, 
                tb_infos_imoveis.st_status   status, 
                tb_corretores.nm_adm   corretor
        FROM tb_infos_imoveis
        INNER JOIN tb_corretores 
        ON tb_infos_imoveis.corretor_responsavel = tb_corretores.id_corretor;
    `;

    let registro = await database.query(comando);
    let x = registro[0];
    return x
}