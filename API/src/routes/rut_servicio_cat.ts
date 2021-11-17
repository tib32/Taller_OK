import { Router } from 'express';
import Ctlr_servicio_cat from '../controllers/ctlr_servicio_cat'
class servicio_cats {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_servicio_cat.insertar);
        this.router.get('/', Ctlr_servicio_cat.lista);
        this.router.get('/:id', Ctlr_servicio_cat.mostrarID);
        this.router.patch('/:id', Ctlr_servicio_cat.update);
        this.router.delete('/:id', Ctlr_servicio_cat.delete);
    }
};
const servicio_catRoutes = new servicio_cats();
export default servicio_catRoutes.router;

