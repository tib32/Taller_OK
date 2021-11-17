import { Router } from 'express';
import Ctlr_medio from '../controllers/ctlr_medio'
class medios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_medio.insertar);
        this.router.get('/', Ctlr_medio.lista);
        this.router.get('/:id', Ctlr_medio.mostrarID);
        this.router.patch('/:id', Ctlr_medio.update);
        this.router.delete('/:id', Ctlr_medio.delete);
    }
};
const medioRoutes = new medios();
export default medioRoutes.router;

