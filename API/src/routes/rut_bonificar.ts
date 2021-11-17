import { Router } from 'express';
import Ctlr_bonificar from '../controllers/ctlr_bonificar'
class bonificars {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_bonificar.insertar);
        this.router.get('/', Ctlr_bonificar.lista);
        this.router.get('/:id', Ctlr_bonificar.mostrarID);
        this.router.patch('/:id', Ctlr_bonificar.update);
        this.router.delete('/:id', Ctlr_bonificar.delete);
    }
};
const bonificarRoutes = new bonificars();
export default bonificarRoutes.router;

