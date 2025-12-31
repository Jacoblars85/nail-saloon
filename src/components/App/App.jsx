import React, { useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import About from "../AboutPage/AboutPage.jsx";
import SchedulePage from "../SchedulePage/SchedulePage.jsx";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import Nav from "../Nav/Nav.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="App-header">Nail Saloon</h1> */}

      <Router>
      <Nav />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/schedule" exact>
          <SchedulePage />
          <ScheduleForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
