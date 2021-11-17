import { Router } from 'express';
import Ctlr_usuario from '../controllers/ctlr_usuarios';
import { checkJwt } from '../middlewares/jwt';
import { checkRole } from '../middlewares/role'
class Usuarios {
    public router: Router = Router();
    constructor() { this.config(); }
    config(): void {
        this.router.get('/', Ctlr_usuario.lista);
        this.router.get('/:id', Ctlr_usuario.mostrarID);
        this.router.post('/add', Ctlr_usuario.insertar);// this.router.post('/', [checkJwt], checkRole(['admin']), Ctlr_usuario.insertar);
        this.router.patch('/:id', Ctlr_usuario.update);
        this.router.delete('/:id', Ctlr_usuario.delete);
    }
};
const usuarioRoutes = new Usuarios();
export default usuarioRoutes.router;