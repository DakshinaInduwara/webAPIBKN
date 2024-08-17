import express from 'express'
import {getAllUsers, addregisterUser, addloginUser} from '../controllers/userContoller.js';


const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', addregisterUser);
router.post('/login', addloginUser);

export default router;
