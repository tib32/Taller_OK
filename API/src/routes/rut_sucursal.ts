import { Router } from 'express';
import Ctlr_sucursal from '../controllers/ctlr_sucursal'
class sucursals {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_sucursal.insertar);
        this.router.get('/', Ctlr_sucursal.lista);
        this.router.get('/:id', Ctlr_sucursal.mostrarID);
        this.router.patch('/:id', Ctlr_sucursal.update);
        this.router.delete('/:id', Ctlr_sucursal.delete);
    }
};
const sucursalRoutes = new sucursals();
export default sucursalRoutes.router;

