import {Router, Request, Response} from 'express';

const router = Router();
// el router lo voy a ocupar para crear mis servicios REST << aqui hago mis end-points >>

router.get('/mensajes', (req: Request, resp: Response)=> {
    resp.json( {
        status: 'OK',
        message: 'Get exitoso!'
    });
});


router.post('/mensajes', (req: Request, resp: Response) => {

    // los campos del form que esta mandando el clinete al servidor
    const data = req.body.data;
    const de = req.body.de;

    resp.json({
        status: 'OK',
        alert: 'Post exitoso!',
        message: data,
        de
    });
});

// leer url con argumentos
router.post('/mensajes/:id', (req: Request, resp: Response) => {

    const argument = req.params.id;
    resp.json({
        satus: 'OK',
        message: 'Solicitud exitosa',
        params: argument 
    });
});

export default router;