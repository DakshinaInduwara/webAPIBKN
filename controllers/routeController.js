import Route from '../models/routeModel.js';

// Create a new route
export const createRoute = async (req, res) => {
  try {
    const { routeName, stations } = req.body;
    const newRoute = new Route({ routeName, stations });
    const savedRoute = await newRoute.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: 'Validation Error', errors });
    } else {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

// Get all routes
export const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate('stations.stationId');
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single route by ID
export const getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id).populate('stations.stationId');
    if (!route) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json(route);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a route by ID
export const updateRoute = async (req, res) => {
  try {
    const { routeName, stations } = req.body;
    const updatedRoute = await Route.findByIdAndUpdate(
      req.params.id,
      { routeName, stations },
      { new: true, runValidators: true }
    ).populate('stations.stationId');

    if (!updatedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.status(200).json(updatedRoute);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: 'Validation Error', errors });
    } else {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

// Delete a route by ID
export const deleteRoute = async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(req.params.id);
    if (!deletedRoute) {
      return res.status(404).json({ message: 'Route not found' });
    }
    res.status(200).json({ message: 'Route deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
