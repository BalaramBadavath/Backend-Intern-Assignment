const User = require('../models/user');
const Assignment = require('../models/assignment');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.create({ username, password });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

// Upload an Assignment
const uploadAssignment = async (req, res) => {
  const { task, admin } = req.body;

  try {
    const assignment = await Assignment.create({ userId: req.user.id, task, admin });
    res.status(201).json({ message: 'Assignment uploaded', assignment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser, uploadAssignment, getAdmins };
