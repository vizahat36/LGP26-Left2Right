
const { Notification } = require("../models");

exports.getNotifications = async (req, res) => {
  const notes = await Notification.findAll({ where: { user_id: req.user.id }, order: [["created_at", "DESC"]], limit: 20 });
  res.json({ success: true, message: "Notifications fetched", data: notes });
};