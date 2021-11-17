import { Router } from 'express';
import Ctlr_contacto from '../controllers/ctlr_contacto'
class contactos {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_contacto.insertar);
        this.router.get('/', Ctlr_contacto.lista);
        this.router.get('/:id', Ctlr_contacto.mostrarID);
        this.router.patch('/:id', Ctlr_contacto.update);
        this.router.delete('/:id', Ctlr_contacto.delete);
    }
};
const contactoRoutes = new contactos();
export default contactoRoutes.router;

