
const bcrypt = require("bcrypt");
const { User } = require("../models");
const { generateToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }
  const exists = await User.findOne({ where: { email } });
  if (exists) return res.status(400).json({ success: false, message: "Email already exists" });
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role, verified: role === "admin" });
  res.json({
    success: true,
    message: "Registration successful",
    data: { token: generateToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role } }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ success: false, message: "Invalid credentials" });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ success: false, message: "Invalid credentials" });
  res.json({
    success: true,
    message: "Login successful",
    data: { token: generateToken(user), user: { id: user.id, name: user.name, email: user.email, role: user.role, verified: user.verified } }
  });
};

exports.me = async (req, res) => {
  const u = req.user;
  res.json({ success: true, message: "User info fetched", data: { id: u.id, name: u.name, email: u.email, role: u.role, verified: u.verified } });
};
