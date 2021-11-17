import { Router } from 'express';
import Ctlr_configuracion from '../controllers/ctlr_configuracion'
class configuracions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_configuracion.insertar);
        this.router.get('/', Ctlr_configuracion.lista);
        this.router.get('/:id', Ctlr_configuracion.mostrarID);
        this.router.patch('/:id', Ctlr_configuracion.update);
        this.router.delete('/:id', Ctlr_configuracion.delete);
    }
};
const configuracionRoutes = new configuracions();
export default configuracionRoutes.router;

