import { GestaoImoveisBuscar, vendasSim, vendasNao, removerImovel, updateVenda, totalImoveis, imovelPorCorretor } from "../repository/gestaImoveisRepository.js";
import {Router} from 'express';

const endpoint = Router();

endpoint.get('/buscarImovel', async (req, resp) => {
    let busca = await GestaoImoveisBuscar();
    resp.send(busca)
});

endpoint.get('/buscaSim', async (req, res) => {
    try {
        const resultado = await vendasSim();
        res.json(resultado);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        res.status(500).send("Erro ao buscar dados");
    }
});

endpoint.get('/buscaNao', async (req, res) => {
    try {
        const resultado = await vendasNao();
        res.json(resultado);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        res.status(500).send("Erro ao buscar dados");
    }
});

endpoint.delete('/deletar/imovel/:id', async (req, resp) => {
        let id = req.params.id;
        let registro = await removerImovel(id);
        resp.send();
  });




endpoint.get('/total/imoveis', async (req, resp) => {
    let registro = await totalImoveis();
    resp.send(registro)
})

endpoint.put('/atualizar/venda/:id', async (req, resp) => {
    let id = req.params.id;
    let vendido = req.body.vendido; 

   
    const vendidoBoolean = vendido === true || vendido === 'true'; 

    let registro = await updateVenda(id, vendidoBoolean); 
    resp.send({ success: true, affectedRows: registro }); 
});

endpoint.get('/imovelPorCorretor/:id', async (req, resp) => {
    let id = req.params.id;
    let busca = await imovelPorCorretor(id);
    resp.send(busca)
});

export default endpoint;