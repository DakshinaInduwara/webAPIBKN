import express from 'express'
import {addTrain, findById, getTrainLocations, deleteTrainByid} from '../controllers/trainController.js'

const router = express.Router();

router.get('/get', getTrainLocations);
router.get('/get/:id', findById);
router.post('/create', addTrain);
router.delete('/deleteTrain/:id', deleteTrainByid);

export default router;
