import express from 'express'
import {addTrainLocation, getTrainLocations} from '../controllers/trainController.js'

const router = express.Router();

router.get('/get', getTrainLocations);
router.post('/create', addTrainLocation);

export default router;
