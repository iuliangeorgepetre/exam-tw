const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participant.controller");

router.post("/", participantController.addParticipant);
router.get("/", participantController.findParticipants);
router.get("/:id", participantController.findParticipantById);
router.put("/:id", participantController.updateParticipant);
router.delete("/:id", participantController.deleteById);

module.exports = router;
