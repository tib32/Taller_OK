import { Router } from 'express';
import Ctlr_denominacionmoneda from '../controllers/ctlr_denominacionmoneda'
class denominacionmonedas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_denominacionmoneda.insertar);
        this.router.get('/', Ctlr_denominacionmoneda.lista);
        this.router.get('/:id', Ctlr_denominacionmoneda.mostrarID);
        this.router.patch('/:id', Ctlr_denominacionmoneda.update);
        this.router.delete('/:id', Ctlr_denominacionmoneda.delete);
    }
};
const denominacionmonedaRoutes = new denominacionmonedas();
export default denominacionmonedaRoutes.router;

