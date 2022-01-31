const { Participant } = require("../models/relationships.js");
var participantDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateParticipant: updateParticipant,
};

function findAll() {
  return Participant.findAll();
}

function findById(id) {
  return Participant.findByPk(id);
}

function deleteById(id) {
  return Participant.destroy({ where: { id: id } });
}

function create(participant) {
  var newParticipant = new Participant(participant);
  return newParticipant.save();
}

function updateParticipant(participant, id) {
  var updateParticipant = {
    name: participant.name,
  };
  return Participant.update(updateParticipant, { where: { id: id } });
}
module.exports = participantDao;
