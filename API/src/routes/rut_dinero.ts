import { Router } from 'express';
import Ctlr_dinero from '../controllers/ctlr_dinero'
class dineros {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_dinero.insertar);
        this.router.get('/', Ctlr_dinero.lista);
        this.router.get('/:id', Ctlr_dinero.mostrarID);
        this.router.patch('/:id', Ctlr_dinero.update);
        this.router.delete('/:id', Ctlr_dinero.delete);
    }
};
const dineroRoutes = new dineros();
export default dineroRoutes.router;

