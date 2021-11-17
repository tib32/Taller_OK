import { Router } from 'express';
import Ctlr_bancoMovimiento from '../controllers/ctlr_bancoMovimiento'
class bancoMovimientos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_bancoMovimiento.insertar);
        this.router.get('/', Ctlr_bancoMovimiento.lista);
        this.router.get('/:id', Ctlr_bancoMovimiento.mostrarID);
        this.router.patch('/:id', Ctlr_bancoMovimiento.update);
        this.router.delete('/:id', Ctlr_bancoMovimiento.delete);
    }
};
const bancoMovimientoRoutes = new bancoMovimientos();
export default bancoMovimientoRoutes.router;

