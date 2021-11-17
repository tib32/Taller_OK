import { Router } from 'express';
import Ctlr_falla from '../controllers/ctlr_falla'
class fallas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_falla.insertar);
        this.router.get('/', Ctlr_falla.lista);
        this.router.get('/:id', Ctlr_falla.mostrarID);
        this.router.patch('/:id', Ctlr_falla.update);
        this.router.delete('/:id', Ctlr_falla.delete);
    }
};
const fallaRoutes = new fallas();
export default fallaRoutes.router;

