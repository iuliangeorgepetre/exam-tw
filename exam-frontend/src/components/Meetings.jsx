import React, { useEffect, useState } from "react";
import api from "../axios";
import MeetingListItem from "./MeetingListItem";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    api.get("/meeting").then((response) => {
      setMeetings(response.data);
      setRefresh(false);
    });
  }, [refresh]);

  return (
    <div>
      {meetings.length > 0
        ? meetings.map((meeting) => (
            <MeetingListItem meeting={meeting} setRefresh={setRefresh} />
          ))
        : "There are no meetings yet."}
    </div>
  );
};

export default Meetings;
