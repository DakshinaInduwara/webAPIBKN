import express from 'express';
import { getAllSchedules, addSchedule, getScheduleById, updateSchedule,deleteSchedule} from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/getall', getAllSchedules);
router.post('/addsched', addSchedule);
router.get('/getsched', getScheduleById);
router.put('/updateshced', updateSchedule);
router.delete('/delsched', deleteSchedule);

export default router;
