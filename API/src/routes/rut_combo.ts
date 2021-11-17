import { Router } from 'express';
import Ctlr_combo from '../controllers/ctlr_combo'
class combos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_combo.insertar);
        this.router.get('/', Ctlr_combo.lista);
        this.router.get('/:id', Ctlr_combo.mostrarID);
        this.router.patch('/:id', Ctlr_combo.update);
        this.router.delete('/:id', Ctlr_combo.delete);
    }
};
const comboRoutes = new combos();
export default comboRoutes.router;

