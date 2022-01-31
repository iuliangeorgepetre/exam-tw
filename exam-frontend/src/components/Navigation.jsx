import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    listStyle: "none",
    justifyContent: "flex-start",
  },
  navLink: {
    margin: "0 10px",
    "& a": {
      textDecoration: "none",
      color: "white",
      fontWeight: "bold",
    },
  },
});
const Navigation = () => {
  const classes = useStyles();
  return (
    <nav>
      <ul className={classes.nav}>
        <li className={classes.navLink}>
          <Button variant="contained">
            <Link to="/">Home</Link>
          </Button>
        </li>
        <li className={classes.navLink}>
          <Button variant="contained">
            <Link to="/meetings">Meetings</Link>
          </Button>
        </li>
        <li className={classes.navLink}>
          <Button variant="contained">
            <Link to="/add-meeting">Add Meeting</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
