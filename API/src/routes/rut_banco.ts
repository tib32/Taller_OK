import { Router } from 'express';
import Ctlr_banco from '../controllers/ctlr_banco'
class bancos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_banco.insertar);
        this.router.get('/', Ctlr_banco.lista);
        this.router.get('/:id', Ctlr_banco.mostrarID);
        this.router.patch('/:id', Ctlr_banco.update);
        this.router.delete('/:id', Ctlr_banco.delete);
    }
};
const bancoRoutes = new bancos();
export default bancoRoutes.router;

