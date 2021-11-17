import { Router } from 'express';
import Ctlr_producto from '../controllers/ctlr_producto'
class productos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_producto.insertar);
        this.router.get('/', Ctlr_producto.lista);
        this.router.get('/:id', Ctlr_producto.mostrarID);
        this.router.patch('/:id', Ctlr_producto.update);
        this.router.delete('/:id', Ctlr_producto.delete);
    }
};
const productoRoutes = new productos();
export default productoRoutes.router;

