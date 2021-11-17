import { Router } from 'express';
import Ctlr_cajaarqueo from '../controllers/ctlr_cajaarqueo'
class cajaarqueos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cajaarqueo.insertar);
        this.router.get('/', Ctlr_cajaarqueo.lista);
        this.router.get('/:id', Ctlr_cajaarqueo.mostrarID);
        this.router.patch('/:id', Ctlr_cajaarqueo.update);
        this.router.delete('/:id', Ctlr_cajaarqueo.delete);
    }
};
const cajaarqueoRoutes = new cajaarqueos();
export default cajaarqueoRoutes.router;

