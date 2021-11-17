import { Router } from 'express';
import Ctlr_pedido from '../controllers/ctlr_pedido'
class pedidos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_pedido.insertar);
        this.router.get('/', Ctlr_pedido.lista);
        this.router.get('/:id', Ctlr_pedido.mostrarID);
        this.router.patch('/:id', Ctlr_pedido.update);
        this.router.delete('/:id', Ctlr_pedido.delete);
    }
};
const pedidoRoutes = new pedidos();
export default pedidoRoutes.router;

