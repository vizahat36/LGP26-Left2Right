
const { FoodPost, Claim, User } = require("../models");

exports.createFood = async (req, res) => {
  const { title, description, quantity, location, expiry_time } = req.body;
  const donor_id = req.user.id;
  const food = await FoodPost.create({ donor_id, title, description, quantity, location, expiry_time, status: "Available" });
  res.json({ success: true, message: "Food post created", data: food });
};

exports.getMyPosts = async (req, res) => {
  const posts = await FoodPost.findAll({ where: { donor_id: req.user.id } });
  res.json({ success: true, message: "Your food posts", data: posts });
};

exports.deleteFood = async (req, res) => {
  const food = await FoodPost.findOne({ where: { id: req.params.id, donor_id: req.user.id } });
  if (!food) return res.status(404).json({ success: false, message: "Food not found" });
  await food.destroy();
  res.json({ success: true, message: "Food post deleted" });
};

exports.availableFood = async (req, res) => {
  // Optionally filter by location/expiry
  const now = new Date();
  const foods = await FoodPost.findAll({
    where: { status: "Available", expiry_time: { [require("sequelize").Op.gt]: now } }
  });
  res.json({ success: true, message: "Available food posts", data: foods });
};
