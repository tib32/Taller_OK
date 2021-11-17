import { Router } from 'express';
import Ctlr_combodetalle from '../controllers/ctlr_combodetalle'
class combodetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_combodetalle.insertar);
        this.router.get('/', Ctlr_combodetalle.lista);
        this.router.get('/:id', Ctlr_combodetalle.mostrarID);
        this.router.patch('/:id', Ctlr_combodetalle.update);
        this.router.delete('/:id', Ctlr_combodetalle.delete);
    }
};
const combodetalleRoutes = new combodetalles();
export default combodetalleRoutes.router;

