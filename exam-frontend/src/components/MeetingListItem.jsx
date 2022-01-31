import React, { useEffect } from "react";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import api from "../axios";

const MeetingListItem = ({ meeting, setRefresh }) => {
  const handleDelete = () => {
    api.delete(`/meeting/${meeting.id}`).then((res) => {
      setRefresh(true);
    });
  };
  return (
    <div>
      <Paper key={meeting.id} sx={{ padding: 10, margin: 5 }}>
        <p>{meeting.description}</p>
        <p>{meeting.date}</p>
        <Button variant="contained" sx={{ margin: 2 }}>
          <Link to={`/meeting/${meeting.id}`}>Enter Meeting</Link>
        </Button>
        <Button variant="contained" sx={{ margin: 2 }} onClick={handleDelete}>
          Delete Meeting
        </Button>
      </Paper>
    </div>
  );
};

export default MeetingListItem;
