import React from "react";
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Commercial from "./commercial/Commercial";
import Header from "./Header";
import Home from "./home/Home";
import Industrial from "./industrial/Industrial";
import Land from "./land/Land";
import Residential from "./residential/Residential";
import HomeDescription from "./home/HomeDescription";
import CommercialDescription from "./commercial/CommercialDescription";
import ResidentialDescription from "./residential/ResidentialDescription";
import IndustrialDescription from "./industrial/IndustrialDescription";
import LandDescription from "./land/LandDescription";

// import '../css/bootstrap.css';
// import '../css/bootstrap.map.css';

// import “bootstrap/dist/bootstrap.min.css”;

function App() {
  return (
    <div className="container-md">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home/description" element={<HomeDescription />}></Route>
          <Route exact path="/residential" element={<Residential />}></Route>
          <Route exact path="/residential/description" element={<ResidentialDescription />}></Route>
          <Route exact path="/commercial" element={<Commercial />}></Route>
          <Route exact path="/commercial/description" element={<CommercialDescription />}></Route>
          <Route exact path="/industrial" element={<Industrial />}></Route>
          <Route exact path="/industrial/description" element={<IndustrialDescription />}></Route>
          <Route exact path="/land" element={<Land />}></Route>
          <Route exact path="/land/description" element={<LandDescription />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
