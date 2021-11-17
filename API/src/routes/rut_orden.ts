import { Router } from 'express';
import Ctlr_orden from '../controllers/ctlr_orden'
class ordens {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_orden.insertar);
        this.router.get('/', Ctlr_orden.lista);
        this.router.get('/:id', Ctlr_orden.mostrarID);
        this.router.patch('/:id', Ctlr_orden.update);
        this.router.delete('/:id', Ctlr_orden.delete);
    }
};
const ordenRoutes = new ordens();
export default ordenRoutes.router;

