import Schedule from '../models/scheduleModel.js';
import Train from '../models/trainModel.js';
import Station from '../models/stationModel.js';

export const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find()
      .populate('trainId', 'trainId')  // Populate trainId with trainId field
      .populate('stationId', 'name');  // Populate stationId with name field
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const addSchedule = async (req, res) => {
  const { trainId, stationId, arrivalTime, departureTime } = req.body;

  try {
    // Check if the referenced Train and Station exist
    const train = await Train.findById(trainId);
    const station = await Station.findById(stationId);

    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    if (!station) {
      return res.status(404).json({ message: 'Station not found' });
    }

    const newSchedule = new Schedule({
      trainId,
      stationId,
      arrivalTime,
      departureTime,
    });

    const savedSchedule = await newSchedule.save();
    res.status(201).json(savedSchedule);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: 'Validation Error', errors });
    } else {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

export const getScheduleById = async (req, res) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findById(id)
      .populate('trainId', 'trainId')
      .populate('stationId', 'name');

    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const { trainId, stationId, arrivalTime, departureTime } = req.body;

  try {
    const updatedSchedule = await Schedule.findByIdAndUpdate(
      id,
      { trainId, stationId, arrivalTime, departureTime },
      { new: true, runValidators: true }
    );

    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.json(updatedSchedule);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: 'Validation Error', errors });
    } else {
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

export const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSchedule = await Schedule.findByIdAndDelete(id);

    if (!deletedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
