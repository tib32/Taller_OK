import { Router } from 'express';
import Ctlr_ventana from '../controllers/ctlr_ventana'
class ventanas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_ventana.insertar);
        this.router.get('/', Ctlr_ventana.lista);
        this.router.get('/:id', Ctlr_ventana.mostrarID);
        this.router.patch('/:id', Ctlr_ventana.update);
        this.router.delete('/:id', Ctlr_ventana.delete);
    }
};
const ventanaRoutes = new ventanas();
export default ventanaRoutes.router;

