const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ? req.headers.authorization.split(" ")[1]
    : null;
  if (!token) return res.status(401).json({ success: false, message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(decoded.id);
    if (!req.user) return res.status(401).json({ success: false, message: "User not found" });
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Token failed" });
  }
};
