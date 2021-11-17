import { Router } from 'express';
import Ctlr_cotizaciondetalle from '../controllers/ctlr_cotizaciondetalle'
class cotizaciondetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cotizaciondetalle.insertar);
        this.router.get('/', Ctlr_cotizaciondetalle.lista);
        this.router.get('/:id', Ctlr_cotizaciondetalle.mostrarID);
        this.router.patch('/:id', Ctlr_cotizaciondetalle.update);
        this.router.delete('/:id', Ctlr_cotizaciondetalle.delete);
    }
};
const cotizaciondetalleRoutes = new cotizaciondetalles();
export default cotizaciondetalleRoutes.router;

