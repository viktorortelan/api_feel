import { Router } from "express";
import multer from "multer";

import storage from "../repository/multer.js";

import addImoveis from "../repository/addImoveisRepository.js";
import viewImoveis from "../repository/viewImoveisRepository.js";
import addClient from "../repository/addClientRepository.js";
import viewClient from "../repository/viewClientRepository.js";

const endpoint = Router();
const m = multer({ storage });

export default endpoint;

endpoint.post('/addImoveis/:nm_imagem/:nm_galeria/:nm_apartamento/:st_status/:rg_regiao/:lc_localizacao/:st_suites/:com_tamanho/:vg_vagas/:tt_titulo/:sb_sobre', async (req, resp) => {

  const { nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre } = req.params;

  await addImoveis(nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre);

  resp.json({ nm_imagem, nm_galeria, nm_apartamento, st_status, rg_regiao, lc_localizacao, st_suites, com_tamanho, vg_vagas, tt_titulo, sb_sobre });

});

endpoint.get('/viewImoveis', async (req, resp) => {

  const x = await viewImoveis();

  resp.send(x);

});

endpoint.post('/addClient/:nm_nome/:em_email/:tl_telefone/:dt_cadastro', async (req, resp) => {

  const { nm_nome, em_email, tl_telefone, dt_cadastro } = req.params;

  const x = await addClient(nm_nome, em_email, tl_telefone, dt_cadastro);

  resp.json({ nm_nome, em_email, tl_telefone, dt_cadastro });

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

