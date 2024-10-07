import { buscarCorretor, totalCorretor } from "../repository/corretorRepository.js";
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


export default endpoint;