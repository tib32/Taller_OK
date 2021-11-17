import { Router } from 'express';
import Ctlr_vehiculotipo from '../controllers/ctlr_vehiculotipo'
class vehiculotipos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculotipo.insertar);
        this.router.get('/', Ctlr_vehiculotipo.lista);
        this.router.get('/:id', Ctlr_vehiculotipo.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculotipo.update);
        this.router.delete('/:id', Ctlr_vehiculotipo.delete);
    }
};
const vehiculotipoRoutes = new vehiculotipos();
export default vehiculotipoRoutes.router;

