
const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const notification = require("../controllers/notificationController");

router.get("/", protect, notification.getNotifications);

module.exports = router;
