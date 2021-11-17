import { Router } from 'express';
import Ctlr_marca from '../controllers/ctlr_marca'
class marcas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_marca.insertar);
        this.router.get('/', Ctlr_marca.lista);
        this.router.get('/:id', Ctlr_marca.mostrarID);
        this.router.patch('/:id', Ctlr_marca.update);
        this.router.delete('/:id', Ctlr_marca.delete);
    }
};
const marcaRoutes = new marcas();
export default marcaRoutes.router;

