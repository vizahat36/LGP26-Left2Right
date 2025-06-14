const jwt = require('jsonwebtoken');

exports.generateToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role, verified: user.verified },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

