import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meetings from "./components/Meetings";
import Meeting from "./components/Meeting";
import AddMeeting from "./components/AddMeeting";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/meetings" element={<Meetings />} />
              <Route exact path="/add-meeting" element={<AddMeeting />} />
              <Route exact path="/meeting/:id" element={<Meeting />} />
            </Routes>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
