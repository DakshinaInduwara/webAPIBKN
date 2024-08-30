import Station from "../models/stationModel.js";

// Get all stations
export const getStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single station by ID
export const getStationById = async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.json(station);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a new station
export const addStation = async (req, res) => {
  const { stationId, name, location, capacity } = req.body;

  try {
    const newStation = new Station({
      stationId,
      name,
      location,
      capacity,
    });

    const savedStation = await newStation.save();
    res.status(201).json(savedStation);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation Error", errors });
    } else {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// Update an existing station
export const updateStation = async (req, res) => {
  try {
    const updatedStation = await Station.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStation) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.json(updatedStation);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation Error", errors });
    } else {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// Delete a station
export const deleteStation = async (req, res) => {
  try {
    const deletedStation = await Station.findByIdAndDelete(req.params.id);
    if (!deletedStation) {
      return res.status(404).json({ message: "Station not found" });
    }
    res.json({ message: "Station deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
