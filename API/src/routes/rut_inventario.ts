import { Router } from 'express';
import Ctlr_inventario from '../controllers/ctlr_inventario'
class inventarios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_inventario.insertar);
        this.router.get('/', Ctlr_inventario.lista);
        this.router.get('/:id', Ctlr_inventario.mostrarID);
        this.router.patch('/:id', Ctlr_inventario.update);
        this.router.delete('/:id', Ctlr_inventario.delete);
    }
};
const inventarioRoutes = new inventarios();
export default inventarioRoutes.router;

