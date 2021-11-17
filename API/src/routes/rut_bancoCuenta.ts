import { Router } from 'express';
import Ctlr_bancoCuenta from '../controllers/ctlr_bancoCuenta'
class bancoCuentas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_bancoCuenta.insertar);
        this.router.get('/', Ctlr_bancoCuenta.lista);
        this.router.get('/:id', Ctlr_bancoCuenta.mostrarID);
        this.router.patch('/:id', Ctlr_bancoCuenta.update);
        this.router.delete('/:id', Ctlr_bancoCuenta.delete);
    }
};
const bancoCuentaRoutes = new bancoCuentas();
export default bancoCuentaRoutes.router;

