import { loginADM } from "../repository/admRepository.js";
import { Router } from 'express';
const endpoint = Router();


endpoint.post('/loginADM', async (req, resp) => {
    try {
        
        let {email, senha} = req.body;

        let x = await loginADM(email, senha);

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