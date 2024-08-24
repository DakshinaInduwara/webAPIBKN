import express from 'express';
import { createRoute, getAllRoutes, getRouteById, updateRoute, deleteRoute } from '../controllers/routeController.js';

const router = express.Router();

router.post('/create', createRoute);
router.get('/getall', getAllRoutes);
router.get('/routid', getRouteById);
router.put('/updateroute', updateRoute);
router.delete('/deleroute', deleteRoute);

export default router;