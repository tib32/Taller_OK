import { Router } from 'express';
import Ctlr_lote from '../controllers/ctlr_lote'
class lotes {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_lote.insertar);
        this.router.get('/', Ctlr_lote.lista);
        this.router.get('/:id', Ctlr_lote.mostrarID);
        this.router.patch('/:id', Ctlr_lote.update);
        this.router.delete('/:id', Ctlr_lote.delete);
    }
};
const loteRoutes = new lotes();
export default loteRoutes.router;

