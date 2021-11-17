import { Router } from 'express';
import Ctlr_venta from '../controllers/ctlr_venta'
class ventas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_venta.insertar);
        this.router.get('/', Ctlr_venta.lista);
        this.router.get('/:id', Ctlr_venta.mostrarID);
        this.router.patch('/:id', Ctlr_venta.update);
        this.router.delete('/:id', Ctlr_venta.delete);
    }
};
const ventaRoutes = new ventas();
export default ventaRoutes.router;

