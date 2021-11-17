import { Router } from 'express';
import Ctlr_servicio from '../controllers/ctlr_servicio'
class servicios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_servicio.insertar);
        this.router.get('/', Ctlr_servicio.lista);
        this.router.get('/:id', Ctlr_servicio.mostrarID);
        this.router.patch('/:id', Ctlr_servicio.update);
        this.router.delete('/:id', Ctlr_servicio.delete);
    }
};
const servicioRoutes = new servicios();
export default servicioRoutes.router;

