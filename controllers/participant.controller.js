const participantDao = require("../daos/participant.dao");
var participantController = {
  addParticipant: addParticipant,
  findParticipants: findParticipants,
  findParticipantById: findParticipantById,
  updateParticipant: updateParticipant,
  deleteById: deleteById,
};

function addParticipant(req, res) {
  let participant = req.body;
  participantDao
    .create(participant)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findParticipantById(req, res) {
  participantDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  participantDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Participant deleted successfully",
        participant: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateParticipant(req, res) {
  participantDao
    .updateParticipant(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Participant updated successfully",
        participant: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findParticipants(req, res) {
  participantDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = participantController;
