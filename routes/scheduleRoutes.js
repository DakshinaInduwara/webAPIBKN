import express from "express";
import {
  getAllSchedules,
  addSchedule,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
} from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/getall", getAllSchedules);
router.post("/addsched", addSchedule);
router.get("/getsched/:id", getScheduleById);
router.put("/updatesched/:id", updateSchedule);
router.delete("/delsched/:id", deleteSchedule);

export default router;
