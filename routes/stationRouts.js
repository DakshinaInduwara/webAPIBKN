import express from "express";
import {
  getStations,
  getStationById,
  addStation,
  updateStation,
  deleteStation,
} from "../controllers/stationController.js";

const router = express.Router();

router.get("/getall", getStations);
router.get("/getStatinid", getStationById);
router.post("/addStation", addStation);
router.put("/updateStation", updateStation);
router.delete("/delete", deleteStation);

export default router;
