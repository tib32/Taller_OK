import { Router } from 'express';
import Ctlr_productofoto from '../controllers/ctlr_productofoto'
class productofotos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_productofoto.insertar);
        this.router.get('/', Ctlr_productofoto.lista);
        this.router.get('/:id', Ctlr_productofoto.mostrarID);
        this.router.patch('/:id', Ctlr_productofoto.update);
        this.router.delete('/:id', Ctlr_productofoto.delete);
    }
};
const productofotoRoutes = new productofotos();
export default productofotoRoutes.router;

