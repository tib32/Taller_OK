import { Router } from 'express';
import Ctlr_facturafeldetalle from '../controllers/ctlr_facturafeldetalle'
class facturafeldetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_facturafeldetalle.insertar);
        this.router.get('/', Ctlr_facturafeldetalle.lista);
        this.router.get('/:id', Ctlr_facturafeldetalle.mostrarID);
        this.router.patch('/:id', Ctlr_facturafeldetalle.update);
        this.router.delete('/:id', Ctlr_facturafeldetalle.delete);
    }
};
const facturafeldetalleRoutes = new facturafeldetalles();
export default facturafeldetalleRoutes.router;

