import { Router } from 'express';
import Ctlr_descuento from '../controllers/ctlr_descuento'
class descuentos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_descuento.insertar);
        this.router.get('/', Ctlr_descuento.lista);
        this.router.get('/:id', Ctlr_descuento.mostrarID);
        this.router.patch('/:id', Ctlr_descuento.update);
        this.router.delete('/:id', Ctlr_descuento.delete);
    }
};
const descuentoRoutes = new descuentos();
export default descuentoRoutes.router;

