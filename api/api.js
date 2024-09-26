import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import './src/repository/conn.js';
import endpoint from './src/controller/endpoints.js';

const api = express();
api.use(cors());
api.use(express.json());
api.use(endpoint);

api.listen(process.env.PORT, () => console.log('API!'));