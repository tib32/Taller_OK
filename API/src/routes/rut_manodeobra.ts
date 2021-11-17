import { Router } from 'express';
import Ctlr_manodeobra from '../controllers/ctlr_manodeobra'
class manodeobras {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_manodeobra.insertar);
        this.router.get('/', Ctlr_manodeobra.lista);
        this.router.get('/:id', Ctlr_manodeobra.mostrarID);
        this.router.patch('/:id', Ctlr_manodeobra.update);
        this.router.delete('/:id', Ctlr_manodeobra.delete);
    }
};
const manodeobraRoutes = new manodeobras();
export default manodeobraRoutes.router;

