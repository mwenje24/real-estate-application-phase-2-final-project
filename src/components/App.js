import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Commercial from "./Commercial";
import Header from "./Header";
import Home from "./Home";
import Industrial from "./Industrial";
import Land from "./Land";
import Residential from "./Residential";

// import '../css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/residential" element={<Residential />}></Route>
          <Route exact path="/commercial" element={<Commercial />}></Route>
          <Route exact path="/industrial" element={<Industrial />}></Route>
          <Route exact path="/land" element={<Land />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
