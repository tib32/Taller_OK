import { Router } from 'express';
import Ctlr_contactomedio from '../controllers/ctlr_contactomedio'
class contactomedios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_contactomedio.insertar);
        this.router.get('/', Ctlr_contactomedio.lista);
        this.router.get('/:id', Ctlr_contactomedio.mostrarID);
        this.router.patch('/:id', Ctlr_contactomedio.update);
        this.router.delete('/:id', Ctlr_contactomedio.delete);
    }
};
const contactomedioRoutes = new contactomedios();
export default contactomedioRoutes.router;

