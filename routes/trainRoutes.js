import express from 'express'
import {addTrainLocation, findById, getTrainLocations} from '../controllers/trainController.js'

const router = express.Router();

router.get('/get', getTrainLocations);
router.get('/get/:id', findById);
router.post('/create', addTrainLocation);

export default router;
