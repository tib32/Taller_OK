import { Router } from 'express';
import Ctlr_cotizacion from '../controllers/ctlr_cotizacion'
class cotizacions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cotizacion.insertar);
        this.router.get('/', Ctlr_cotizacion.lista);
        this.router.get('/:id', Ctlr_cotizacion.mostrarID);
        this.router.patch('/:id', Ctlr_cotizacion.update);
        this.router.delete('/:id', Ctlr_cotizacion.delete);
    }
};
const cotizacionRoutes = new cotizacions();
export default cotizacionRoutes.router;

