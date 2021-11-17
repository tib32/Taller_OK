import { Router } from 'express';
import Ctlr_ordendetalle from '../controllers/ctlr_ordendetalle'
class ordendetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_ordendetalle.insertar);
        this.router.get('/', Ctlr_ordendetalle.lista);
        this.router.get('/:id', Ctlr_ordendetalle.mostrarID);
        this.router.patch('/:id', Ctlr_ordendetalle.update);
        this.router.delete('/:id', Ctlr_ordendetalle.delete);
    }
};
const ordendetalleRoutes = new ordendetalles();
export default ordendetalleRoutes.router;

