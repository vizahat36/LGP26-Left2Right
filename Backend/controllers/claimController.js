const { Claim, FoodPost, User, Notification } = require("../models");
const { sendEmail } = require("../utils/email");

exports.claimFood = async (req, res) => {
  const food = await FoodPost.findByPk(req.params.id);
  if (!food || food.status !== "Available") {
    return res.status(400).json({ success: false, message: "Food unavailable" });
  }
  const claim = await Claim.create({ food_id: food.id, receiver_id: req.user.id });
  food.status = "Claimed";
  await food.save();

  // Notify donor
  const donor = await User.findByPk(food.donor_id);
  await Notification.create({ user_id: donor.id, message: `Your food post "${food.title}" has been claimed!` });

  // Send email (optional)
  try {
    await sendEmail({
      to: donor.email,
      subject: "Your food was claimed!",
      text: `Your post "${food.title}" was claimed by a receiver.`
    });
  } catch (e) {}

  res.json({ success: true, message: "Food claimed successfully", data: claim });
};

exports.myClaims = async (req, res) => {
  const claims = await Claim.findAll({ where: { receiver_id: req.user.id }, include: [{ all: true }] });
  res.json({ success: true, message: "Your claims", data: claims });
};
