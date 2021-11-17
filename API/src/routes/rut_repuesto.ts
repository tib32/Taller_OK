import { Router } from 'express';
import Ctlr_repuesto from '../controllers/ctlr_repuesto'
class repuestos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_repuesto.insertar);
        this.router.get('/', Ctlr_repuesto.lista);
        this.router.get('/:id', Ctlr_repuesto.mostrarID);
        this.router.patch('/:id', Ctlr_repuesto.update);
        this.router.delete('/:id', Ctlr_repuesto.delete);
    }
};
const repuestoRoutes = new repuestos();
export default repuestoRoutes.router;

