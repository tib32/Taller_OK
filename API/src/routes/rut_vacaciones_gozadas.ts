import { Router } from 'express';
import Ctlr_vacaciones_gozadas from '../controllers/ctlr_vacaciones_gozadas'
class vacaciones_gozadass {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vacaciones_gozadas.insertar);
        this.router.get('/', Ctlr_vacaciones_gozadas.lista);
        this.router.get('/:id', Ctlr_vacaciones_gozadas.mostrarID);
        this.router.patch('/:id', Ctlr_vacaciones_gozadas.update);
        this.router.delete('/:id', Ctlr_vacaciones_gozadas.delete);
    }
};
const vacaciones_gozadasRoutes = new vacaciones_gozadass();
export default vacaciones_gozadasRoutes.router;

