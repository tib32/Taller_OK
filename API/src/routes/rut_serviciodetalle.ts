import { Router } from 'express';
import Ctlr_serviciodetalle from '../controllers/ctlr_serviciodetalle'
class serviciodetalles {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_serviciodetalle.insertar);
        this.router.get('/', Ctlr_serviciodetalle.lista);
        this.router.get('/:id', Ctlr_serviciodetalle.mostrarID);
        this.router.patch('/:id', Ctlr_serviciodetalle.update);
        this.router.delete('/:id', Ctlr_serviciodetalle.delete);
    }
};
const serviciodetalleRoutes = new serviciodetalles();
export default serviciodetalleRoutes.router;

