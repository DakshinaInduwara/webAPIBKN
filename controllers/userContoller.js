import User from "../models/userModel.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Register a new user
export const addregisterUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
      role,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation Error", errors });
    } else if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      res.status(400).json({ message: `The ${field} is already in use.` });
    } else {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

// User login
export const addloginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an existing user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { username, email, role },
      { new: true, runValidators: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an admin user
export const updateAdminUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;

  try {
    // Check if the user is an admin
    const user = await User.findById(id);
    if (!user || user.role !== "admin") {
      return res.status(404).json({ message: "Admin user not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.role = role || user.role;

    await user.save();

    res.status(200).json({ message: "Admin user updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an admin user
export const deleteAdminUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user || user.role !== "admin") {
      return res.status(404).json({ message: "Admin user not found" });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Admin user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
