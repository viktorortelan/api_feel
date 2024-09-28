import { cadastroCliente, loginCliente} from "../repository/clienteRepository.js";

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


// endpoints.get('/buscar/:email', async (req, resp) => {
//     let email = req.params.email;
//     let registro = await buscar(email);
//     resp.send(registro);
// })

export default endpoints;