
const { User, ImpactLog, FoodPost } = require("../models");

exports.listUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({ success: true, message: "All users", data: users });
};

exports.verifyUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found" });
  user.verified = true;
  await user.save();
  res.json({ success: true, message: "User verified" });
};

exports.logs = async (req, res) => {
  const logs = await ImpactLog.findAll();
  res.json({ success: true, message: "Donation logs", data: logs });
};

exports.impact = async (req, res) => {
  // Aggregate stats
  const totalMeals = await ImpactLog.sum("meals_served");
  const foodSaved = await FoodPost.count();
  const users = await User.count();
  res.json({
    success: true,
    message: "Platform impact",
    data: { totalMeals, foodSaved, users }
  });
};
