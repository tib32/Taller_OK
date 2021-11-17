import { Router } from 'express';
import Ctlr_vehiculorevisiondefault from '../controllers/ctlr_vehiculorevisiondefault'
class vehiculorevisiondefaults {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculorevisiondefault.insertar);
        this.router.get('/', Ctlr_vehiculorevisiondefault.lista);
        this.router.get('/:id', Ctlr_vehiculorevisiondefault.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculorevisiondefault.update);
        this.router.delete('/:id', Ctlr_vehiculorevisiondefault.delete);
    }
};
const vehiculorevisiondefaultRoutes = new vehiculorevisiondefaults();
export default vehiculorevisiondefaultRoutes.router;

