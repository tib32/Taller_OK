import { Router } from 'express';
import Ctlr_tipodoc from '../controllers/ctlr_tipodoc'
class tipodocs {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_tipodoc.insertar);
        this.router.get('/', Ctlr_tipodoc.lista);
        this.router.get('/:id', Ctlr_tipodoc.mostrarID);
        this.router.patch('/:id', Ctlr_tipodoc.update);
        this.router.delete('/:id', Ctlr_tipodoc.delete);
    }
};
const tipodocRoutes = new tipodocs();
export default tipodocRoutes.router;

