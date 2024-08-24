import express from 'express'
import {addTrain, findById, getTrainLocations} from '../controllers/trainController.js'

const router = express.Router();

router.get('/get', getTrainLocations);
router.get('/get/:id', findById);
router.post('/create', addTrain);

export default router;
