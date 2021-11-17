import { Router } from 'express';
import Ctlr_ventana_control from '../controllers/ctlr_ventana_control'
class ventana_controls {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_ventana_control.insertar);
        this.router.get('/', Ctlr_ventana_control.lista);
        this.router.get('/:id', Ctlr_ventana_control.mostrarID);
        this.router.patch('/:id', Ctlr_ventana_control.update);
        this.router.delete('/:id', Ctlr_ventana_control.delete);
    }
};
const ventana_controlRoutes = new ventana_controls();
export default ventana_controlRoutes.router;

