import { Router } from 'express';
import Ctlr_um from '../controllers/ctlr_um'
class Um {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_um.insertar);
        this.router.get('/', Ctlr_um.lista);
        this.router.get('/:id', Ctlr_um.mostrarID);
        this.router.patch('/:id', Ctlr_um.update);
        this.router.delete('/:id', Ctlr_um.delete);
    }
};
const umRoutes = new Um();
export default umRoutes.router;

