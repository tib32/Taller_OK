import { Router } from 'express';
import Ctlr_caja from '../controllers/ctlr_caja'
class cajas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_caja.insertar);
        this.router.get('/', Ctlr_caja.lista);
        this.router.get('/:id', Ctlr_caja.mostrarID);
        this.router.patch('/:id', Ctlr_caja.update);
        this.router.delete('/:id', Ctlr_caja.delete);
    }
};
const cajaRoutes = new cajas();
export default cajaRoutes.router;

