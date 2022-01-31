import { Paper, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../axios";

const Meeting = () => {
  const { id } = useParams();
  const [meetingData, setMeetingData] = useState({});

  const [newParticipantName, setNewParticipantName] = useState("");
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (refresh) {
      api.get(`/meeting/${id}`).then((res) => {
        setMeetingData(res.data);
        setRefresh(false);
      });
    }
  }, [id, refresh]);

  const handleAddParticipantToMeeting = () => {
    console.log("test");
    api
      .post("/participant", { name: newParticipantName, meetingId: id })
      .then((res) => console.log(res));

    setRefresh(true);
  };
  const handleRemoveParticipant = (participantId) => {
    api.delete(`/participant/${participantId}`).then((res) => console.log(res));

    setRefresh(true);
  };

  const handleNameChange = (newName) => {
    setNewParticipantName(newName);
  };

  return (
    meetingData !== undefined && (
      <Paper sx={{ padding: 2 }}>
        <Box>{meetingData.description}</Box>
        <Box>{meetingData.date}</Box>
        <Box>{`meetio.com/${meetingData.url}`}</Box>
        <Box>
          {meetingData.participants !== undefined &&
            meetingData.participants.map((participant) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: 4,
                }}
              >
                <span>{participant.name}</span>
                <span>{participant.name}</span>
              </Box>
            ))}
        </Box>
        <Box>
          <TextField
            value={newParticipantName}
            onChange={(e) => handleNameChange(e.target.value)}
          ></TextField>
        </Box>
        <Box>
          <Button variant="contained" onClick={handleAddParticipantToMeeting}>
            Add Participant
          </Button>
        </Box>
      </Paper>
    )
  );
};

export default Meeting;
