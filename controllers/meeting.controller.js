const meetingDao = require("../daos/meeting.dao");
var meetingController = {
  addMeeting: addMeeting,
  findMeetings: findMeetings,
  findMeetingById: findMeetingById,
  updateMeeting: updateMeeting,
  deleteById: deleteById,
};

function addMeeting(req, res) {
  let meeting = req.body;
  meeting.url = `meetingId/${req.body.date}`;
  meetingDao
    .create(meeting)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function findMeetingById(req, res) {
  meetingDao
    .findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteById(req, res) {
  meetingDao
    .deleteById(req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Meeting deleted successfully",
        meeting: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateMeeting(req, res) {
  meetingDao
    .updateMeeting(req.body, req.params.id)
    .then((data) => {
      res.status(200).json({
        message: "Meeting updated successfully",
        meeting: data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function findMeetings(req, res) {
  meetingDao
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = meetingController;
