import Route from "../models/routeModel.js";
import Train from "../models/trainModel.js";
import TrainHistory from "../models/trainHistoryModel.js";
import TrainHistoryBkp from "../models/trainHistoryBkpModel.js";

// List of stations
const stations = [
  { name: "Colombo Fort", lat: 6.9335, lon: 79.8507, spd: 50 },
  { name: "Kollupitiya (Colpetty)", lat: 6.9157, lon: 79.851, spd: 55 },
  { name: "Bambalapitiya", lat: 6.9013, lon: 79.8536, spd: 70 },
  { name: "Wellawatta", lat: 6.8796, lon: 79.8562, spd: 50 },
  { name: "Dehiwala", lat: 6.8575, lon: 79.8614, spd: 70 },
  { name: "Mount Lavinia", lat: 6.8413, lon: 79.8627, spd: 70 },
  { name: "Rathmalana", lat: 6.8262, lon: 79.873, spd: 70 },
  { name: "Angulana", lat: 6.8131, lon: 79.8769, spd: 50 },
  { name: "Lunawa", lat: 6.7976, lon: 79.8778, spd: 70 },
  { name: "Moratuwa", lat: 6.7806, lon: 79.8817, spd: 50 },
  { name: "Koralawella", lat: 6.7638, lon: 79.8885, spd: 50 },
  { name: "Egoda Uyana", lat: 6.7567, lon: 79.8882, spd: 70 },
  { name: "Panadura", lat: 6.7129, lon: 79.904, spd: 50 },
  { name: "Pinwatta", lat: 6.6928, lon: 79.9122, spd: 70 },
  { name: "Wadduwa", lat: 6.6628, lon: 79.9223, spd: 70 },
  { name: "Pothupitiya", lat: 6.6413, lon: 79.9303, spd: 70 },
  { name: "Kalutara North", lat: 6.6231, lon: 79.938, spd: 50 },
  { name: "Kalutara South", lat: 6.5948, lon: 79.9603, spd: 70 },
  { name: "Katukurunda", lat: 6.5732, lon: 79.9688, spd: 50 },
  { name: "Payagala North", lat: 6.5565, lon: 79.9721, spd: 70 },
  { name: "Payagala South", lat: 6.5454, lon: 79.9756, spd: 50 },
  { name: "Maggona", lat: 6.5272, lon: 79.9796, spd: 50 },
  { name: "Beruwala", lat: 6.4774, lon: 79.9897, spd: 70 },
  { name: "Hettimulla", lat: 6.4637, lon: 80.0015, spd: 50 },
  { name: "Aluthgama", lat: 6.4331, lon: 80.0006, spd: 70 },
  { name: "Bentota", lat: 6.4237, lon: 80.0029, spd: 50 },
  { name: "Induruwa", lat: 6.3878, lon: 80.0051, spd: 70 },
  { name: "Maha Induruwa", lat: 6.3675, lon: 80.0042, spd: 50 },
  { name: "Kosgoda", lat: 6.3495, lon: 80.0082, spd: 50 },
  { name: "Piyagama", lat: 6.3315, lon: 80.0074, spd: 70 },
  { name: "Balapitiya", lat: 6.2849, lon: 80.0316, spd: 50 },
  { name: "Ambalangoda", lat: 6.2418, lon: 80.0547, spd: 70 },
  { name: "Madampagama", lat: 6.2188, lon: 80.0606, spd: 50 },
  { name: "Akurala", lat: 6.1914, lon: 80.0652, spd: 70 },
  { name: "Hikkaduwa", lat: 6.1403, lon: 80.1003, spd: 70 },
  { name: "Thiranagama", lat: 6.1199, lon: 80.1116, spd: 70 },
  { name: "Seenigama", lat: 6.1026, lon: 80.1302, spd: 50 },
  { name: "Telwatta", lat: 6.0904, lon: 80.1385, spd: 70 },
  { name: "Dodanduwa", lat: 6.0731, lon: 80.1438, spd: 70 },
  { name: "Rathgama", lat: 6.0501, lon: 80.1569, spd: 50 },
  { name: "Boossa", lat: 6.0284, lon: 80.1688, spd: 70 },
  { name: "Pitiwella", lat: 6.0123, lon: 80.1852, spd: 52 },
  { name: "Ginthota", lat: 6.0022, lon: 80.1944, spd: 70 },
  { name: "Richmond Hill (Asgiriya)", lat: 5.9776, lon: 80.2127, spd: 70 },
  { name: "Galle", lat: 6.0334, lon: 80.217, spd: 50 },
  { name: "Katugoda", lat: 5.9895, lon: 80.2443, spd: 70 },
  { name: "Unawatuna", lat: 5.9753, lon: 80.2476, spd: 70 },
  { name: "Talpe", lat: 5.9494, lon: 80.2653, spd: 70 },
  { name: "Habaraduwa", lat: 5.9355, lon: 80.2798, spd: 50 },
  { name: "Koggala", lat: 5.9237, lon: 80.2934, spd: 70 },
  { name: "Kathaluwa", lat: 5.913, lon: 80.3073, spd: 50 },
  { name: "Ahangama", lat: 5.8977, lon: 80.3206, spd: 70 },
  { name: "Midigama", lat: 5.8729, lon: 80.3375, spd: 50 },
  { name: "Weligama", lat: 5.972, lon: 80.4257, spd: 70 },
  { name: "Polwathumodara", lat: 5.9684, lon: 80.4358, spd: 85 },
  { name: "Mirissa", lat: 5.9492, lon: 80.4542, spd: 70 },
  { name: "Kamburugamuwa", lat: 5.9396, lon: 80.4634, spd: 73 },
  { name: "Walgama", lat: 5.9268, lon: 80.4781, spd: 50 },
  { name: "Matara", lat: 5.9486, lon: 80.5353, spd: 57 },
];

// List of stations for Colombo to Kandy
const kandyStations = [
  { name: "Colombo Fort", lat: 6.9335, lon: 79.8507, spd: 55 },
  { name: "Maradana", lat: 6.9274, lon: 79.8654, spd: 60 },
  { name: "Ragama", lat: 7.0305, lon: 79.9489, spd: 55 },
  { name: "Gampaha", lat: 7.0919, lon: 80.014, spd: 80 },
  { name: "Veyangoda", lat: 7.1573, lon: 80.0937, spd: 83 },
  { name: "Polgahawela", lat: 7.3355, lon: 80.2992, spd: 55 },
  { name: "Alawwa", lat: 7.2652, lon: 80.226, spd: 70 },
  { name: "Ambepussa", lat: 7.233, lon: 80.2115, spd: 55 },
  { name: "Kadugannawa", lat: 7.2533, lon: 80.5951, spd: 40 },
  { name: "Peradeniya", lat: 7.2715, lon: 80.5953, spd: 55 },
  { name: "Kandy", lat: 7.2906, lon: 80.6337, spd: 38 },
];

// List of stations for Badulla to Colombo
const badullaToColomboStations = [
  { name: "Badulla", lat: 6.9892, lon: 81.0557, spd: 45 },
  { name: "Hali Ela", lat: 6.9416, lon: 81.0553, spd: 40 },
  { name: "Demodara", lat: 6.9053, lon: 81.0575, spd: 50 },
  { name: "Ella", lat: 6.8663, lon: 81.0465, spd: 60 },
  { name: "Kithal Ella", lat: 6.8405, lon: 81.0433, spd: 55 },
  { name: "Heel Oya", lat: 6.7839, lon: 81.0162, spd: 70 },
  { name: "Bandarawela", lat: 6.8374, lon: 80.9863, spd: 65 },
  { name: "Haputale", lat: 6.7656, lon: 80.9521, spd: 80 },
  { name: "Idalgashinna", lat: 6.7187, lon: 80.8939, spd: 70 },
  { name: "Ohiya", lat: 6.7964, lon: 80.8475, spd: 90 },
  { name: "Pattipola", lat: 6.8843, lon: 80.8196, spd: 60 },
  { name: "Ambewela", lat: 6.9429, lon: 80.7945, spd: 70 },
  { name: "Nanu Oya", lat: 6.9493, lon: 80.7821, spd: 75 },
  { name: "Great Western", lat: 6.9998, lon: 80.7462, spd: 60 },
  { name: "Radella", lat: 7.0254, lon: 80.7191, spd: 50 },
  { name: "Talawakele", lat: 6.9704, lon: 80.6623, spd: 80 },
  { name: "Watagoda", lat: 6.9752, lon: 80.6224, spd: 65 },
  { name: "Kotagala", lat: 6.9649, lon: 80.5826, spd: 50 },
  { name: "Hatton", lat: 6.8915, lon: 80.5855, spd: 85 },
  { name: "Rozella", lat: 6.8306, lon: 80.5811, spd: 70 },
  { name: "Watawala", lat: 6.8313, lon: 80.5224, spd: 55 },
  { name: "Galboda", lat: 6.8763, lon: 80.4849, spd: 90 },
  { name: "Inguru Oya", lat: 6.9206, lon: 80.4371, spd: 60 },
  { name: "Nawalapitiya", lat: 6.9445, lon: 80.4596, spd: 50 },
  { name: "Gampola", lat: 7.1355, lon: 80.5707, spd: 55 },
  { name: "Gelioya", lat: 7.1651, lon: 80.5932, spd: 70 },
  { name: "Peradeniya", lat: 7.2715, lon: 80.5953, spd: 45 },
  { name: "Kandy", lat: 7.2906, lon: 80.6337, spd: 50 },
  { name: "Katugastota", lat: 7.3313, lon: 80.6371, spd: 65 },
  { name: "Polgahawela", lat: 7.3355, lon: 80.2992, spd: 80 },
  { name: "Ragama", lat: 7.0305, lon: 79.9489, spd: 70 },
  { name: "Maradana", lat: 6.9274, lon: 79.8654, spd: 55 },
  { name: "Colombo Fort", lat: 6.9335, lon: 79.8507, spd: 50 },
];

// List of stations for Anuradapura to Kurunegala
const anuradhapuraToKurunegalaStations = [
  { name: "Anuradhapura", lat: 8.3564, lon: 80.4176, spd: 70 },
  { name: "Mihintale", lat: 8.3704, lon: 80.5012, spd: 60 },
  { name: "Saliyapura", lat: 8.3163, lon: 80.5041, spd: 55 },
  { name: "Galgamuwa", lat: 7.9907, lon: 80.4524, spd: 80 },
  { name: "Ambanpola", lat: 7.8442, lon: 80.3913, spd: 75 },
  { name: "Maho", lat: 7.8183, lon: 80.3071, spd: 60 },
  { name: "Rambukkana", lat: 7.2864, lon: 80.3621, spd: 50 },
  { name: "Kurunegala", lat: 7.4877, lon: 80.3623, spd: 85 },
];

export const colomboToPanaduraStations = stations.slice(
  0,
  stations.findIndex((station) => station.name === "Panadura") + 1
);

export const colomboToAluthgamaStations = stations.slice(
  0,
  stations.findIndex((station) => station.name === "Aluthgama") + 1
);

export const colomboToGalleStations = stations.slice(
  0,
  stations.findIndex((station) => station.name === "Galle") + 1
);

export const fetchNextStationLocationEveryMinute = async (
  trainId,
  stations
) => {
  let currentIndex = 0;
  let directionForward = true;

  setInterval(async () => {
    const station = stations[currentIndex];
    if (station) {
      console.log(
        `Location of ${station.name}: Latitude ${station.lat}, Longitude ${station.lon}, Speed ${station.spd}`
      );
      const { name: location, lat, lon, spd: speed } = station;

      // Save to Train collection
      await Train.findOneAndUpdate(
        { trainId: trainId },
        { location, lat, lon, speed }
      );

      // Save to TrainHistory collection
      const newHistory = new TrainHistory({
        trainId,
        location,
        lat,
        lon,
        speed,
      });
      await newHistory.save();

      if (directionForward) {
        if (currentIndex < stations.length - 1) {
          currentIndex++;
        } else {
          directionForward = false;
          setTimeout(() => {
            currentIndex--;
          }, 120000); // Stay for 2 minutes
        }
      } else {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          directionForward = true;
          currentIndex++;
        }
      }
    } else {
      console.log("Station not found.");
    }
  }, 60000);
};

fetchNextStationLocationEveryMinute("T0020", stations); // Colombo to Matara
fetchNextStationLocationEveryMinute("t0011", kandyStations); // Colombo to Kandy
fetchNextStationLocationEveryMinute("T0088", colomboToPanaduraStations);
fetchNextStationLocationEveryMinute("T0090", colomboToAluthgamaStations);
fetchNextStationLocationEveryMinute("T0091", colomboToGalleStations);
fetchNextStationLocationEveryMinute("T0050", badullaToColomboStations);
fetchNextStationLocationEveryMinute("T0055", anuradhapuraToKurunegalaStations);

export const getStationLocationByName = (stationName) => {
  const station = stations.find((s) => s.name === stationName);
  if (station) {
    return { lat: station.lat, lon: station.lon, speed: station.spd };
  } else {
    return null;
  }
};

// Create a new route
export const createRoute = async (req, res) => {
  try {
    const { routeName, stations, trainName } = req.body;
    const newRoute = new Route({ routeName, stations, trainName });
    const savedRoute = await newRoute.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation Error", errors });
    } else {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// Get all routes
export const getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get a single route by ID
export const getRouteById = async (req, res) => {
  try {
    // Log the incoming request ID for debugging
    console.log(`Fetching route with ID: ${req.params.id}`);
    
    // Fetch the route from the database
    const route = await Route.findById(req.params.id).populate(
      "stations.stationId"
    );

    // Check if the route exists
    if (!route) {
      return res.status(404).json({ message: "Route not found" });
    }

    // Send the route details as the response
    res.status(200).json(route);
  } catch (error) {
    // Log the error details for debugging
    console.error("Error fetching route by ID:", error);

    // Send an error response
    res.status(500).json({ message: "Server Error" });
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
    ).populate("stations.stationId");

    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json(updatedRoute);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation Error", errors });
    } else {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// Delete a route by ID
export const deleteRoute = async (req, res) => {
  try {
    const deletedRoute = await Route.findByIdAndDelete(req.params.id);
    if (!deletedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ message: "Route deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Function to move data older than 90 days to backup table
export const moveOldTrainDataToBackup = async () => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - 90);

  // Find records older than 90 days
  const oldRecords = await TrainHistory.find({
    timestamp: { $lt: cutoffDate },
  });

  // Insert them into the backup table
  if (oldRecords.length > 0) {
    await TrainHistoryBkp.insertMany(oldRecords);
    // Delete them from the original table
    await TrainHistory.deleteMany({
      _id: { $in: oldRecords.map((record) => record._id) },
    });
  }
};

// Call the function periodically to move old data (e.g., daily)
setInterval(moveOldTrainDataToBackup, 24 * 60 * 60 * 1000); // Run daily
