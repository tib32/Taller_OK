import { Router } from 'express';
import Ctlr_salario from '../controllers/ctlr_salario'
class salarios {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_salario.insertar);
        this.router.get('/', Ctlr_salario.lista);
        this.router.get('/:id', Ctlr_salario.mostrarID);
        this.router.patch('/:id', Ctlr_salario.update);
        this.router.delete('/:id', Ctlr_salario.delete);
    }
};
const salarioRoutes = new salarios();
export default salarioRoutes.router;

