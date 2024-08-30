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
router.get("/getStatinid/:id", getStationById);
router.post("/addStation", addStation);
router.put("/updateStation/:id", updateStation);
router.delete("/delete/:id", deleteStation);

export default router;
