
const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const { allowRoles } = require("../middlewares/roleMiddleware");
const claim = require("../controllers/claimController");

router.post("/claim/:id", protect, allowRoles("receiver"), claim.claimFood);
router.get("/mine", protect, allowRoles("receiver"), claim.myClaims);

module.exports = router;
