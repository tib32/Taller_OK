import { Router } from 'express';
import Ctlr_bonificacion from '../controllers/ctlr_bonificacion'
class bonificacions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_bonificacion.insertar);
        this.router.get('/', Ctlr_bonificacion.lista);
        this.router.get('/:id', Ctlr_bonificacion.mostrarID);
        this.router.patch('/:id', Ctlr_bonificacion.update);
        this.router.delete('/:id', Ctlr_bonificacion.delete);
    }
};
const bonificacionRoutes = new bonificacions();
export default bonificacionRoutes.router;

