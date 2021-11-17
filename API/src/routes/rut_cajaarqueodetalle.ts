import { Router } from 'express';
import Ctlr_cajaarqueodetalle from '../controllers/ctlr_cajaarqueodetalle'
class cajaarqueodetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cajaarqueodetalle.insertar);
        this.router.get('/', Ctlr_cajaarqueodetalle.lista);
        this.router.get('/:id', Ctlr_cajaarqueodetalle.mostrarID);
        this.router.patch('/:id', Ctlr_cajaarqueodetalle.update);
        this.router.delete('/:id', Ctlr_cajaarqueodetalle.delete);
    }
};
const cajaarqueodetalleRoutes = new cajaarqueodetalles();
export default cajaarqueodetalleRoutes.router;

