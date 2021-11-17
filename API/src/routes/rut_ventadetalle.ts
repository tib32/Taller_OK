import { Router } from 'express';
import Ctlr_ventadetalle from '../controllers/ctlr_ventadetalle'
class ventadetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_ventadetalle.insertar);
        this.router.get('/', Ctlr_ventadetalle.lista);
        this.router.get('/:id', Ctlr_ventadetalle.mostrarID);
        this.router.patch('/:id', Ctlr_ventadetalle.update);
        this.router.delete('/:id', Ctlr_ventadetalle.delete);
    }
};
const ventadetalleRoutes = new ventadetalles();
export default ventadetalleRoutes.router;

