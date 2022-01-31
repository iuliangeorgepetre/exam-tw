const express = require("express");
const router = express.Router();
const meetingController = require("../controllers/meeting.controller");

router.post("/", meetingController.addMeeting);
router.get("/", meetingController.findMeetings);
router.get("/:id", meetingController.findMeetingById);
router.put("/:id", meetingController.updateMeeting);
router.delete("/:id", meetingController.deleteById);

module.exports = router;
