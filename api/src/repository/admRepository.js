import database from './conn.js';

export async function loginADM(email, senha) {
    let comando = `
        select id_adm   id,
                nm_adm    nome,
                ds_email  email
        from tb_ADM
         where ds_email = ? and ds_senha = ?
    `;

    let registro = await database.query(comando, [email, senha]);
    return registro[0];

}