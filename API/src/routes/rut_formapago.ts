import { Router } from 'express';
import Ctlr_formapago from '../controllers/ctlr_formapago'
class formapagos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_formapago.insertar);
        this.router.get('/', Ctlr_formapago.lista);
        this.router.get('/:id', Ctlr_formapago.mostrarID);
        this.router.patch('/:id', Ctlr_formapago.update);
        this.router.delete('/:id', Ctlr_formapago.delete);
    }
};
const formapagoRoutes = new formapagos();
export default formapagoRoutes.router;

