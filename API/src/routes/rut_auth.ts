import { Router } from 'express';
import Ctlr_auth from '../controllers/ctlr_auth';
import { checkJwt } from '../middlewares/jwt';


const router = Router();
//login
router.post('/login', Ctlr_auth.login);
console.log('logininng');

// Change Password
router.post('/change-password',[checkJwt], Ctlr_auth.changePassword);
export default router;
