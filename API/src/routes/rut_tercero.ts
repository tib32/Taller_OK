import { Router } from 'express';
import Ctlr_tercero from '../controllers/ctlr_tercero'
class terceros {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_tercero.insertar);
        this.router.get('/', Ctlr_tercero.lista);
        this.router.get('/:id', Ctlr_tercero.mostrarID);
        this.router.patch('/:id', Ctlr_tercero.update);
        this.router.delete('/:id', Ctlr_tercero.delete);
    }
};
const terceroRoutes = new terceros();
export default terceroRoutes.router;

