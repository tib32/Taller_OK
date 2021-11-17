import { Router } from 'express';
import Ctlr_vehiculomarca from '../controllers/ctlr_vehiculomarca'
class vehiculomarcas {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_vehiculomarca.insertar);
        this.router.get('/', Ctlr_vehiculomarca.lista);
        this.router.get('/:id', Ctlr_vehiculomarca.mostrarID);
        this.router.patch('/:id', Ctlr_vehiculomarca.update);
        this.router.delete('/:id', Ctlr_vehiculomarca.delete);
    }
};
const vehiculomarcaRoutes = new vehiculomarcas();
export default vehiculomarcaRoutes.router;

