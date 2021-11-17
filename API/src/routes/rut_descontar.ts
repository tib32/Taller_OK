import { Router } from 'express';
import Ctlr_descontar from '../controllers/ctlr_descontar'
class descontars {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_descontar.insertar);
        this.router.get('/', Ctlr_descontar.lista);
        this.router.get('/:id', Ctlr_descontar.mostrarID);
        this.router.patch('/:id', Ctlr_descontar.update);
        this.router.delete('/:id', Ctlr_descontar.delete);
    }
};
const descontarRoutes = new descontars();
export default descontarRoutes.router;

