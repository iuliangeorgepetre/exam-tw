const express = require("express");
const router = express.Router();
const meetingRoutes = require("./meeting.routes");
const participantRoutes = require("./participant.routes");

router.use("/meeting", meetingRoutes);
router.use("/participant", participantRoutes);
module.exports = router;
