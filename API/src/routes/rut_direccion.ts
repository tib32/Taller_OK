import { Router } from 'express';
import Ctlr_direccion from '../controllers/ctlr_direccion'
class direccions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_direccion.insertar);
        this.router.get('/', Ctlr_direccion.lista);
        this.router.get('/:id', Ctlr_direccion.mostrarID);
        this.router.patch('/:id', Ctlr_direccion.update);
        this.router.delete('/:id', Ctlr_direccion.delete);
    }
};
const direccionRoutes = new direccions();
export default direccionRoutes.router;

