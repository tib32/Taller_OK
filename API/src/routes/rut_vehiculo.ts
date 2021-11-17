import { Router } from 'express';
import Ctlr_vehiculo from '../controllers/ctlr_vehiculo'
class vehiculos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculo.insertar);
        this.router.get('/', Ctlr_vehiculo.lista);
        this.router.get('/:id', Ctlr_vehiculo.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculo.update);
        this.router.delete('/:id', Ctlr_vehiculo.delete);
    }
};
const vehiculoRoutes = new vehiculos();
export default vehiculoRoutes.router;

