import { Router } from 'express';
import Ctlr_facturafel from '../controllers/ctlr_facturafel'
class facturafels {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_facturafel.insertar);
        this.router.get('/', Ctlr_facturafel.lista);
        this.router.get('/:id', Ctlr_facturafel.mostrarID);
        this.router.patch('/:id', Ctlr_facturafel.update);
        this.router.delete('/:id', Ctlr_facturafel.delete);
    }
};
const facturafelRoutes = new facturafels();
export default facturafelRoutes.router;

