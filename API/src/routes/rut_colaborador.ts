import { Router } from 'express';
import Ctlr_colaborador from '../controllers/ctlr_colaborador'
class colaboradors {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_colaborador.insertar);
        this.router.get('/', Ctlr_colaborador.lista);
        this.router.get('/:id', Ctlr_colaborador.mostrarID);
        this.router.patch('/:id', Ctlr_colaborador.update);
        this.router.delete('/:id', Ctlr_colaborador.delete);
    }
};
const colaboradorRoutes = new colaboradors();
export default colaboradorRoutes.router;

