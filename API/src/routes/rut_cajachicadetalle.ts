import { Router } from 'express';
import Ctlr_cajachicadetalle from '../controllers/ctlr_cajachicadetalle'
class cajachicadetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cajachicadetalle.insertar);
        this.router.get('/', Ctlr_cajachicadetalle.lista);
        this.router.get('/:id', Ctlr_cajachicadetalle.mostrarID);
        this.router.patch('/:id', Ctlr_cajachicadetalle.update);
        this.router.delete('/:id', Ctlr_cajachicadetalle.delete);
    }
};
const cajachicadetalleRoutes = new cajachicadetalles();
export default cajachicadetalleRoutes.router;

