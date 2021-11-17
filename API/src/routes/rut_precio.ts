import { Router } from 'express';
import Ctlr_precio from '../controllers/ctlr_precio'
class precios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_precio.insertar);
        this.router.get('/', Ctlr_precio.lista);
        this.router.get('/:id', Ctlr_precio.mostrarID);
        this.router.patch('/:id', Ctlr_precio.update);
        this.router.delete('/:id', Ctlr_precio.delete);
    }
};
const precioRoutes = new precios();
export default precioRoutes.router;

