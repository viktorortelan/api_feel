import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import './src/repository/conn.js';
import endpoint from './src/controller/endpoints.js';
import clienteController from './src/controller/clienteController.js';
import admController from './src/controller/admController.js';
import gestaImoveisController from './src/controller/gestaImoveisController.js';
import corretorController from './src/controller/corretorController.js';

const api = express();
api.use(cors());
api.use(express.json());
api.use(clienteController);
api.use(endpoint);
api.use(admController);
api.use(gestaImoveisController);
api.use(corretorController);


api.listen(process.env.PORT, () => console.log('API!'));

