import { Router } from 'express';
import Ctlr_vehiculorecepcion from '../controllers/ctlr_vehiculorecepcion'
class vehiculorecepcions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculorecepcion.insertar);
        this.router.get('/', Ctlr_vehiculorecepcion.lista);
        this.router.get('/:id', Ctlr_vehiculorecepcion.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculorecepcion.update);
        this.router.delete('/:id', Ctlr_vehiculorecepcion.delete);
    }
};
const vehiculorecepcionRoutes = new vehiculorecepcions();
export default vehiculorecepcionRoutes.router;

