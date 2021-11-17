import { Router } from 'express';
import Ctlr_index from './../controllers/index';
class IndexRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', Ctlr_index.index);
    }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
