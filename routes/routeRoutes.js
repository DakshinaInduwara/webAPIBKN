import express from "express";
import {
  createRoute,
  getAllRoutes,
  getRouteById,
  updateRoute,
  deleteRoute,
} from "../controllers/routeController.js";

const router = express.Router();

router.post("/create", createRoute);
router.get("/getall", getAllRoutes);
router.get("/routid/:id", getRouteById);
router.put("/updateroute/:id", updateRoute);
router.delete("/deleroute/:id", deleteRoute);

export default router;
