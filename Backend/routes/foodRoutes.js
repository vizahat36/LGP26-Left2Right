
const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const food = require("../controllers/foodController");

// DONOR
router.post("/", protect, allowRoles("donor"), food.createFood);
router.get("/mine", protect, allowRoles("donor"), food.getMyPosts);
router.delete("/:id", protect, allowRoles("donor"), food.deleteFood);

// RECEIVER
router.get("/available", protect, allowRoles("receiver"), food.availableFood);

module.exports = router;
