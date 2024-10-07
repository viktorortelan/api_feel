import database from "./conn.js";

export async function loginCliente(email, telefone) {
    
    let comando = `
        select 	id_cliente id, 
                nm_cliente nome, 
                ds_email email 
        from    tb_cliente
        where 	ds_email = ?
        and 	ds_telefone = ?
    `

    let resp = await database.query(comando, [email, telefone]);
    return resp[0];

}

export async function cadastroCliente(nome, email, telefone) {
    
    let comando = `
        insert into tb_cliente(nm_cliente, ds_email, ds_telefone)
                       values (?, ?, ?);
    `

    let [resp] = await database.query(comando, [nome, email, telefone]);
    let id = resp.insertId;
    console.log(id);
    return id;

}

export async function buscar(email) {
    let comando = `
        select * from tb_cliente ;
    `;

    let registro = await database.query(comando);
    let info = registro[0];
    return info;
}

export async function totalCliente() {
    let comando = `
        SELECT COUNT(*) AS total_clientes FROM tb_cliente;
    `;
    let registro = await database.query(comando);
    let fim = registro[0];
    return fim[0];
}