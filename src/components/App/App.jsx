import React, { useEffect } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home.jsx";
import About from "../AboutPage/AboutPage.jsx";
import SchedulePage from "../SchedulePage/SchedulePage.jsx";
import ScheduleForm from "../ScheduleForm/ScheduleForm.jsx";
import Nav from "../Nav/Nav.jsx";
import Admin from "../Admin/Admin.jsx";
import Footer from "../Footer/Footer.jsx"
import "./App.css";

function App() {
  return (
    <div className="App">
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
        </Route>

        <Route path="/form" exact>
          <ScheduleForm />
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
