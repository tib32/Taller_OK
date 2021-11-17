import { Router } from 'express';
import Ctlr_cajachica from '../controllers/ctlr_cajachica'
class cajachicas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_cajachica.insertar);
        this.router.get('/', Ctlr_cajachica.lista);
        this.router.get('/:id', Ctlr_cajachica.mostrarID);
        this.router.patch('/:id', Ctlr_cajachica.update);
        this.router.delete('/:id', Ctlr_cajachica.delete);
    }
};
const cajachicaRoutes = new cajachicas();
export default cajachicaRoutes.router;

