import Train from '../models/trainModel.js'


export const getTrainLocations = async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const findById = async (req, res) => {
  try {
    const trains = await Train.findById(req.params.id);
    res.json({  
        trainId:trains.trainId,
        trainName:trains.trainName,
        location:trains.location,
        lat:trains.lat,
        lon:trains.lon,
        speed:trains.speed,
        capacity:trains.capacity
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error findById' });
  }
};

export const addTrain = async (req, res) => {

  try {
    const newTrain = new Train({
      ...req.body,


    });
    console.log({newTrain});
    const savedTrain = await newTrain.save();
    res.status(201).json(savedTrain);
  } catch (error) 
  {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: 'Validation Error', errors });
    } else 
    {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

//Delete train by id
export const deleteTrainByid = async (req, res) => {
  try {
    console.log('ID received:', req.params.id); 
    const deleteTrainByid = await Train.findByIdAndDelete(req.params.id);
    if (!deleteTrainByid) {
      return res.status(404).json({ message: 'Train not found' });
    }
    res.status(200).json({ message: 'Train deleted successfully' });
  } catch (error) {
    console.error('Error during delete:', error); // Log the error details
    res.status(500).json({ message: 'Server Error deleteTrainByid', error: error.message });
  }
};
