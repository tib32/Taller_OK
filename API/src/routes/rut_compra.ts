import { Router } from 'express';
import Ctlr_compra from '../controllers/ctlr_compra'
class compras {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_compra.insertar);
        this.router.get('/', Ctlr_compra.lista);
        this.router.get('/:id', Ctlr_compra.mostrarID);
        this.router.patch('/:id', Ctlr_compra.update);
        this.router.delete('/:id', Ctlr_compra.delete);
    }
};
const compraRoutes = new compras();
export default compraRoutes.router;

