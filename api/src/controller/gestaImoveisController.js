import { GestaoImoveisBuscar } from "../repository/gestaImoveisRepository.js";
import {Router} from 'express';

const endpoint = Router();

endpoint.get('/buscarImovel', async (req, resp) => {
    let busca = await GestaoImoveisBuscar();
    resp.send(busca)
})

export default endpoint;