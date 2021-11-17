import { Router } from 'express';
import Ctlr_pasarelapago from '../controllers/ctlr_pasarelapago'
class pasarelapagos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_pasarelapago.insertar);
        this.router.get('/', Ctlr_pasarelapago.lista);
        this.router.get('/:id', Ctlr_pasarelapago.mostrarID);
        this.router.patch('/:id', Ctlr_pasarelapago.update);
        this.router.delete('/:id', Ctlr_pasarelapago.delete);
    }
};
const pasarelapagoRoutes = new pasarelapagos();
export default pasarelapagoRoutes.router;

