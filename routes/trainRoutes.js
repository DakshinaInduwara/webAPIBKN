import express from "express";
import {
  addTrain,
  findById,
  getTrainLocations,
  updateTrain,
  deleteTrainByid,
} from "../controllers/trainController.js";

const router = express.Router();

router.get("/get", getTrainLocations);
router.get("/get/:id", findById);
router.post("/create", addTrain);
router.put("/train/:id", updateTrain);
router.delete("/deleteTrain/:id", deleteTrainByid);

export default router;
