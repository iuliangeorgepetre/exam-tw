const { Meeting } = require("../models/relationships.js");
var meetingDao = {
  findAll: findAll,
  create: create,
  findById: findById,
  deleteById: deleteById,
  updateMeeting: updateMeeting,
};

function findAll() {
  return Meeting.findAll({ include: ["participants"] });
}

function findById(id) {
  return Meeting.findByPk(id, { include: ["participants"] });
}

function deleteById(id) {
  return Meeting.destroy({ where: { id: id } });
}

function create(meeting) {
  var newMeeting = new Meeting(meeting);
  newMeeting.url = `meeting-url/${newMeeting.id}`;
  return newMeeting.save();
}

function updateMeeting(meeting, id) {
  var updateMeeting = {
    name: meeting.name,
  };
  return Meeting.update(updateMeeting, { where: { id: id } });
}
module.exports = meetingDao;
