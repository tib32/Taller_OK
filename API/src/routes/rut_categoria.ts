import { Router } from 'express';
import Ctlr_categoria from '../controllers/ctlr_categoria'
class Categoria {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_categoria.insertar);
        this.router.get('/', Ctlr_categoria.lista);
        this.router.get('/:id', Ctlr_categoria.mostrarID);
        this.router.patch('/:id', Ctlr_categoria.update);
        this.router.delete('/:id', Ctlr_categoria.delete);
    }
};
const categoriaRoutes = new Categoria();
export default categoriaRoutes.router;

