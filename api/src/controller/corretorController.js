import { buscarCorretor, totalCorretor, updateCorretor, removerCorretor, loginCorretor} from "../repository/corretorRepository.js";
import {Router} from 'express';

const endpoint = Router();

endpoint.get('/buscar/corretor', async (req, resp) => {
    let registro = await buscarCorretor()
    resp.send(registro);
});

endpoint.get('/total/corretor', async (req, resp) => {
    let registro = await totalCorretor();
    resp.send(registro);
});

endpoint.put('/atualizar/corretor/:nome/:email/:senha/:id', async (req, resp) => {
    try {
        const { nome, email, senha, id } = req.params;

        let registro = await updateCorretor(nome, email, senha, id);
        
        if (registro > 0) {
    
            resp.status(200).send({ message: 'Corretor atualizado com sucesso!' });
        } else {
    
            resp.status(404).send({ message: 'Corretor não encontrado.' });
        }
    } catch (error) {
        console.error(error);
        resp.status(500).send({ message: 'Erro ao atualizar corretor.' });
    }
});


endpoint.delete('/remover/corretor/:id', async (req, resp) => {
    let id = req.params.id;
    let registro = await removerCorretor(id);
    resp.send();
})

endpoint.post('/loginCorretor', async (req, resp) => {
    try {
        let {email, senha} = req.body;
        let x = await loginCorretor(email, senha);
        if(!x[0])
            throw new Error("Credenciais invalidas");
        resp.send(x[0]);
    } catch (err) {
        
        resp.status(404).send({
            err: err.message
        })

    }
});


export default endpoint;