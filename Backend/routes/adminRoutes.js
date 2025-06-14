
const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const admin = require("../controllers/adminController");

router.get("/users", protect, allowRoles("admin"), admin.listUsers);
router.put("/verify/:id", protect, allowRoles("admin"), admin.verifyUser);
router.get("/logs", protect, allowRoles("admin"), admin.logs);
router.get("/impact", protect, allowRoles("admin"), admin.impact);

module.exports = router;
