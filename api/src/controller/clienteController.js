import { cadastroCliente, loginCliente, buscar, totalCliente} from "../repository/clienteRepository.js";
import { updateCliente } from "../repository/addClientRepository.js";

import { Router } from "express";

const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        
        let {email, telefone} = req.body;

        let x = await loginCliente(email, telefone);

        if(!x[0])
            throw new Error("Credenciais invalidas");
            

        resp.send(x[0]);

    } catch (err) {
        
        resp.status(404).send({
            err: err.message
        })

    }

})

endpoints.post('/cliente', async (req, resp) => {
    try {
        
        let {nome, email, telefone} = req.body;
        
        if(!nome)
            throw new Error("Nome é obrigatório!");
        if(!email)
            throw new Error("Email é obrigatório!");
        if(!telefone)
            throw new Error("Telefone é obrigatório!");

        let id = await cadastroCliente(nome, email, telefone);

        resp.send({id: id});

    } catch (err) {
        
        resp.status(404).send({err: err.message})

    }

})


endpoints.get('/buscar', async (req, resp) => {
    let registro = await buscar();
    resp.send(registro);
})


endpoints.get('/total/cliente', async (req, resp) => {
    let registro = await totalCliente();
    resp.send(registro);
})


endpoints.put('/atualizar/cliente/:nome/:email/:telefone/:id', async (req, resp) => {
    try {
        console.log(req.params); 
        const { nome, email, telefone, id } = req.params; 
        
        let registro = await updateCliente(nome, email, telefone, id); 
        
        if (registro > 0) {
            resp.status(200).send({ message: 'Dados atualizados com sucesso!!' });
        } else {
            resp.status(404).send({ message: 'Cliente não encontrado.' });
        }
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: 'Erro ao atualizar cliente.' });
    }
});



export default endpoints;