import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// bodyParser 
// estoy diciendo los valores que estoy posteando en el form, tomalos y conviertalos en un objeto de js
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());


// CORS
server.app.use(cors({origin: true, credentials: true})); // acá estoy permitiendo que cualquier perdona pueda llamar mis servicios

// rutas de servicios
server.app.use('/', router);

server.inicio( ()=> {
    console.log(`El servidor esta corriendo en el puerto ${server.port}`);
});



