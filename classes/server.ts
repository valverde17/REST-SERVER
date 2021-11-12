import express from 'express';
import { SERVER_PORT } from '../global/enviroment';

export default class Server {
    public app: express.Application;
    public port: number;

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }
    
    // metodo para levantar servidor
    inicio(callback: Function){
        this.app.listen(this.port, callback());  
    }
}