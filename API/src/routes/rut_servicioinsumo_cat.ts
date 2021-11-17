import { Router } from 'express';
import Ctlr_servicioinsumo_cat from '../controllers/ctlr_servicioinsumo_cat'
class servicioinsumo_cats {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_servicioinsumo_cat.insertar);
        this.router.get('/', Ctlr_servicioinsumo_cat.lista);
        this.router.get('/:id', Ctlr_servicioinsumo_cat.mostrarID);
        this.router.patch('/:id', Ctlr_servicioinsumo_cat.update);
        this.router.delete('/:id', Ctlr_servicioinsumo_cat.delete);
    }
};
const servicioinsumo_catRoutes = new servicioinsumo_cats();
export default servicioinsumo_catRoutes.router;

