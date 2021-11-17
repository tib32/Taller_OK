import { Router } from 'express';
import Ctlr_tracking from '../controllers/ctlr_tracking'
class trackings {
    public router: Router = Router();
    constructor() { this.config(); }

    config(): void {
        this.router.post('/add', Ctlr_tracking.insertar);
        this.router.get('/', Ctlr_tracking.lista);
        this.router.get('/:id', Ctlr_tracking.mostrarID);
        this.router.patch('/:id', Ctlr_tracking.update);
        this.router.delete('/:id', Ctlr_tracking.delete);
    }
};
const trackingRoutes = new trackings();
export default trackingRoutes.router;

