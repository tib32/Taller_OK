import { Router } from 'express';
import Ctlr_compradetalle from '../controllers/ctlr_compradetalle'
class compradetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_compradetalle.insertar);
        this.router.get('/', Ctlr_compradetalle.lista);
        this.router.get('/:id', Ctlr_compradetalle.mostrarID);
        this.router.patch('/:id', Ctlr_compradetalle.update);
        this.router.delete('/:id', Ctlr_compradetalle.delete);
    }
};
const compradetalleRoutes = new compradetalles();
export default compradetalleRoutes.router;

