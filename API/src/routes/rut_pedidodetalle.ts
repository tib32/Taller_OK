import { Router } from 'express';
import Ctlr_pedidodetalle from '../controllers/ctlr_pedidodetalle'
class pedidodetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_pedidodetalle.insertar);
        this.router.get('/', Ctlr_pedidodetalle.lista);
        this.router.get('/:id', Ctlr_pedidodetalle.mostrarID);
        this.router.patch('/:id', Ctlr_pedidodetalle.update);
        this.router.delete('/:id', Ctlr_pedidodetalle.delete);
    }
};
const pedidodetalleRoutes = new pedidodetalles();
export default pedidodetalleRoutes.router;

