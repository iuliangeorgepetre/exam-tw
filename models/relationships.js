const Meeting = require("./meeting");
const Participant = require("./participant");

Meeting.hasMany(Participant, {
  as: "participants",
});
Participant.belongsTo(Meeting, {
  foreignKey: "meetingId",
  as: "meeting",
});

module.exports = { Meeting, Participant };
