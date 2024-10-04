import { Router } from "express";
import multer from "multer";

import storage from "../repository/multer.js";

import addImoveis from "../repository/addImoveisRepository.js";
import viewImoveis from "../repository/viewImoveisRepository.js";
import addClient from "../repository/addClientRepository.js";
import viewClient from "../repository/viewClientRepository.js";
import verifyId from '../repository/verifyIdRepository.js'
import selectCount from "../repository/selectCountRepository.js";

const endpoint = Router();
const m = multer({ storage });

export default endpoint;

endpoint.post('/addImoveis/:nm_imagem/:nm_galeria/:nm_apartamento/:st_status/:rg_regiao/:lc_localizacao/:st_suites/:com_tamanho/:vg_vagas/:tt_titulo/:sb_sobre/:corretor_responsavel', async (req, resp) => {

  const { nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel } = req.params;

  const x = await addImoveis(nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre, corretor_responsavel);

  resp.send({ x });

});

endpoint.get('/viewImoveis', async (req, resp) => {

  const x = await viewImoveis();

  resp.send(x);

});

endpoint.put('/addClient/:data/:email', async (req, resp) => {

  const { data, email } = req.params;
  await addClient(data, email);
  resp.send();
});

endpoint.get('/viewClient', async (req, resp) => {

  const x = await viewClient();

  resp.send(x);

})

endpoint.post('/multer', m.single('img'), (req, resp) => {

  const { filename, originalname, destination, mimetype } = req.file;

  const obj = {
    fl: filename,
    og: originalname,
    dt: destination,
    mt: mimetype
  }

  resp.send(obj);

});

endpoint.get('/verifyId/:id', async (req, resp) => {
  const { id } = req.params;
  const x = await verifyId(id);
  resp.send(x);

});

endpoint.get('/selectCount', async (req, resp) => {
  const x = await selectCount();
  const value = x.length;
  const obj = {
    rows: value
  }
  resp.send(obj);
});


