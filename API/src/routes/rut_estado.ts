import { Router } from 'express';
import Ctlr_estado from '../controllers/ctlr_estado'
class estados {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_estado.insertar);
        this.router.get('/', Ctlr_estado.lista);
        this.router.get('/:id', Ctlr_estado.mostrarID);
        this.router.patch('/:id', Ctlr_estado.update);
        this.router.delete('/:id', Ctlr_estado.delete);
    }
};
const estadoRoutes = new estados();
export default estadoRoutes.router;

