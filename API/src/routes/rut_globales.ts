import { Router } from 'express';
import Ctlr_globales from '../controllers/ctlr_globales'
class globaless {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_globales.insertar);
        this.router.get('/', Ctlr_globales.lista);
        this.router.get('/:id', Ctlr_globales.mostrarID);
        this.router.patch('/:id', Ctlr_globales.update);
        this.router.delete('/:id', Ctlr_globales.delete);
    }
};
const globalesRoutes = new globaless();
export default globalesRoutes.router;

