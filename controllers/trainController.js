import Train from '../models/trainModel.js'

export const getTrainLocations = async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const addTrainLocation = async (req, res) => {
  const { trainId, location } = req.body;

  try {
    const newTrain = new Train({
      trainId,
      location,
    });
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
