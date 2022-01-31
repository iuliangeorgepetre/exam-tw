import React, { useState } from "react";
import { Paper, Button, TextField, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import api from "../axios";

const AddMeeting = () => {
  const useStyles = makeStyles({
    root: {
      padding: 30,
    },
    textInputField: {
      margin: 20,
      width: "100%",
    },
    form: {
      padding: 30,
    },
  });
  const navigate = useNavigate();
  const [meetingToAdd, setMeetingToAdd] = useState({
    description: "",
    date: new Date(),
  });
  const handleAddMeeting = () => {
    console.log(meetingToAdd.description);
    api.post("/meeting", {
      description: meetingToAdd.description,
      date: meetingToAdd.date,
    });
    navigate("/meetings");
  };
  const handleMeetingDescriptionChange = (newDescription) => {
    setMeetingToAdd({ ...meetingToAdd, description: newDescription });
  };
  const handleMeetingDateChange = (newDate) => {
    setMeetingToAdd({ ...meetingToAdd, date: newDate });
  };
  const classes = useStyles();
  return (
    <Paper className={classes.form}>
      <TextField
        className={classes.textInputField}
        label="Description"
        variant="outlined"
        value={meetingToAdd.description}
        onChange={(e) => handleMeetingDescriptionChange(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={meetingToAdd.date}
          onChange={(e) => handleMeetingDateChange(e.target.value)}
          renderInput={(params) => (
            <TextField className={classes.textInputField} {...params} />
          )}
        />
      </LocalizationProvider>
      <Box>
        <Button variant="contained" onClick={handleAddMeeting}>
          Add Quote
        </Button>
      </Box>
    </Paper>
  );
};

export default AddMeeting;
