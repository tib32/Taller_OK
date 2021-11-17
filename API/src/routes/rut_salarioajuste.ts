import { Router } from 'express';
import Ctlr_salarioajuste from '../controllers/ctlr_salarioajuste'
class salarioajustes {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_salarioajuste.insertar);
        this.router.get('/', Ctlr_salarioajuste.lista);
        this.router.get('/:id', Ctlr_salarioajuste.mostrarID);
        this.router.patch('/:id', Ctlr_salarioajuste.update);
        this.router.delete('/:id', Ctlr_salarioajuste.delete);
    }
};
const salarioajusteRoutes = new salarioajustes();
export default salarioajusteRoutes.router;

