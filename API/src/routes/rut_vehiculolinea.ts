import { Router } from 'express';
import Ctlr_vehiculolinea from '../controllers/ctlr_vehiculolinea'
class vehiculolineas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculolinea.insertar);
        this.router.get('/', Ctlr_vehiculolinea.lista);
        this.router.get('/:id', Ctlr_vehiculolinea.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculolinea.update);
        this.router.delete('/:id', Ctlr_vehiculolinea.delete);
    }
};
const vehiculolineaRoutes = new vehiculolineas();
export default vehiculolineaRoutes.router;

