import Route from '../models/routeModel.js';

// List of stations
const stations = [
    { name: 'Colombo Fort', lat: 6.9335, lon: 79.8507 },
    { name: 'Kollupitiya (Colpetty)', lat: 6.9157, lon: 79.8510 },
    { name: 'Bambalapitiya', lat: 6.9013, lon: 79.8536 },
    { name: 'Wellawatta', lat: 6.8796, lon: 79.8562 },
    { name: 'Dehiwala', lat: 6.8575, lon: 79.8614 },
    { name: 'Mount Lavinia', lat: 6.8413, lon: 79.8627 },
    { name: 'Rathmalana', lat: 6.8262, lon: 79.8730 },
    { name: 'Angulana', lat: 6.8131, lon: 79.8769 },
    { name: 'Lunawa', lat: 6.7976, lon: 79.8778 },
    { name: 'Moratuwa', lat: 6.7806, lon: 79.8817 },
    { name: 'Koralawella', lat: 6.7638, lon: 79.8885 },
    { name: 'Egoda Uyana', lat: 6.7567, lon: 79.8882 },
    { name: 'Panadura', lat: 6.7129, lon: 79.9040 },
    { name: 'Pinwatta', lat: 6.6928, lon: 79.9122 },
    { name: 'Wadduwa', lat: 6.6628, lon: 79.9223 },
    { name: 'Pothupitiya', lat: 6.6413, lon: 79.9303 },
    { name: 'Kalutara North', lat: 6.6231, lon: 79.9380 },
    { name: 'Kalutara South', lat: 6.5948, lon: 79.9603 },
    { name: 'Katukurunda', lat: 6.5732, lon: 79.9688 },
    { name: 'Payagala North', lat: 6.5565, lon: 79.9721 },
    { name: 'Payagala South', lat: 6.5454, lon: 79.9756 },
    { name: 'Maggona', lat: 6.5272, lon: 79.9796 },
    { name: 'Beruwala', lat: 6.4774, lon: 79.9897 },
    { name: 'Hettimulla', lat: 6.4637, lon: 80.0015 },
    { name: 'Aluthgama', lat: 6.4331, lon: 80.0006 },
    { name: 'Bentota', lat: 6.4237, lon: 80.0029 },
    { name: 'Induruwa', lat: 6.3878, lon: 80.0051 },
    { name: 'Maha Induruwa', lat: 6.3675, lon: 80.0042 },
    { name: 'Kosgoda', lat: 6.3495, lon: 80.0082 },
    { name: 'Piyagama', lat: 6.3315, lon: 80.0074 },
    { name: 'Balapitiya', lat: 6.2849, lon: 80.0316 },
    { name: 'Ambalangoda', lat: 6.2418, lon: 80.0547 },
    { name: 'Madampagama', lat: 6.2188, lon: 80.0606 },
    { name: 'Akurala', lat: 6.1914, lon: 80.0652 },
    { name: 'Hikkaduwa', lat: 6.1403, lon: 80.1003 },
    { name: 'Thiranagama', lat: 6.1199, lon: 80.1116 },
    { name: 'Seenigama', lat: 6.1026, lon: 80.1302 },
    { name: 'Telwatta', lat: 6.0904, lon: 80.1385 },
    { name: 'Dodanduwa', lat: 6.0731, lon: 80.1438 },
    { name: 'Rathgama', lat: 6.0501, lon: 80.1569 },
    { name: 'Boossa', lat: 6.0284, lon: 80.1688 },
    { name: 'Pitiwella', lat: 6.0123, lon: 80.1852 },
    { name: 'Ginthota', lat: 6.0022, lon: 80.1944 },
    { name: 'Richmond Hill (Asgiriya)', lat: 5.9776, lon: 80.2127 },
    { name: 'Galle', lat: 6.0334, lon: 80.2170 },
    { name: 'Katugoda', lat: 5.9895, lon: 80.2443 },
    { name: 'Unawatuna', lat: 5.9753, lon: 80.2476 },
    { name: 'Talpe', lat: 5.9494, lon: 80.2653 },
    { name: 'Habaraduwa', lat: 5.9355, lon: 80.2798 },
    { name: 'Koggala', lat: 5.9237, lon: 80.2934 },
    { name: 'Kathaluwa', lat: 5.9130, lon: 80.3073 },
    { name: 'Ahangama', lat: 5.8977, lon: 80.3206 },
    { name: 'Midigama', lat: 5.8729, lon: 80.3375 },
    { name: 'Weligama', lat: 5.9720, lon: 80.4257 },
    { name: 'Polwathumodara', lat: 5.9684, lon: 80.4358 },
    { name: 'Mirissa', lat: 5.9492, lon: 80.4542 },
    { name: 'Kamburugamuwa', lat: 5.9396, lon: 80.4634 },
    { name: 'Walgama', lat: 5.9268, lon: 80.4781 },
    { name: 'Matara', lat: 5.9486, lon: 80.5353 },
  ];
  
  // Function to fetch the next station's location every 1 minute
export const fetchNextStationLocationEveryMinute = () => {
    let currentIndex = 0; // Start from the first station
  
    setInterval(() => {
      const station = stations[currentIndex];
      if (station) {
        console.log(`Location of ${station.name}: Latitude ${station.lat}, Longitude ${station.lon}`);
        currentIndex = (currentIndex + 1) % stations.length; // Move to the next station and wrap around
      } else {
        console.log('Station not found.');
      }
    }, 60000); // 60000 ms = 1 minute
  };
  
  // Example: Start fetching the next station location every minute
  fetchNextStationLocationEveryMinute();

  // Function to get the location of a station by its name
  export const getStationLocationByName = (stationName) => {
    const station = stations.find(s => s.name === stationName);
    if (station) {
      return { lat: station.lat, lon: station.lon };
    } else {
      return null;
    }
  };
  
  // Function to fetch the location every 1 minute
//   export const fetchLocationEveryMinute = (stationName) => {
//     setInterval(() => {
//       const location = getStationLocationByName(stationName);
//       if (location) {
//         console.log(`Location of ${stationName}: Latitude ${location.lat}, Longitude ${location.lon}`);
//       } else {
//         console.log(`Station ${stationName} not found.`);
//       }
//     }, 60000); // 60000 ms = 1 minute
//   };
  
//   // Example: Start fetching location of 'Colombo Fort' every minute
//   fetchLocationEveryMinute('Colombo Fort');
  

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
