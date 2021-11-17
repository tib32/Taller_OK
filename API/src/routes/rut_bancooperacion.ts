import { Router } from 'express';
import Ctlr_BancoOperacion from '../controllers/ctlr_bancooperacion'
class BancoOperacions {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_BancoOperacion.insertar);
        this.router.get('/', Ctlr_BancoOperacion.lista);
        this.router.get('/:id', Ctlr_BancoOperacion.mostrarID);
        this.router.patch('/:id', Ctlr_BancoOperacion.update);
        this.router.delete('/:id', Ctlr_BancoOperacion.delete);
    }
};
const BancoOperacionRoutes = new BancoOperacions();
export default BancoOperacionRoutes.router;

