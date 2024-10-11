const Admin = require('../models/admin');
const Assignment = require('../models/assignment');
const jwt = require('jsonwebtoken');

// Register a new admin
const registerAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({ username, password });
    res.status(201).json({ message: 'Admin created', admin });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login Admin
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

// Get Assignments for an Admin
const getAssignments = async (req, res) => {
  const adminId = req.user.id;
  try {
    const assignments = await Assignment.find({ admin: adminId });
    res.json(assignments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Accept an Assignment
const acceptAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    const assignment = await Assignment.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
    res.json({ message: 'Assignment accepted', assignment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Reject an Assignment
const rejectAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    const assignment = await Assignment.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
    res.json({ message: 'Assignment rejected', assignment });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { registerAdmin, loginAdmin, getAssignments, acceptAssignment, rejectAssignment };
