const express = require("express");
const {
  getInTouch,
  getAllRequests,
  deleteRequest,
} = require("../controllers/getInTouchController");
const router = express.Router();

// POST
router.post("/getInTouch", getInTouch);

// GET
router.get("/getAllRequests", getAllRequests);

// POST
router.post("/deleteRequest/:id", deleteRequest);

module.exports = router;
