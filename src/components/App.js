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
import Login from "./admin/Login";
import Admin from "./admin/Admin";
import AddProperty from "./admin/AddProperty";

function App() {
  return (
    <div className="container-md">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/addproperty" element={<AddProperty />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home/description/:propertyId" element={<HomeDescription />}></Route>
          <Route exact path="/residential" element={<Residential />}></Route>
          <Route exact path="/residential/description/:propertyId" element={<ResidentialDescription />}></Route>
          <Route exact path="/commercial" element={<Commercial />}></Route>
          <Route exact path="/commercial/description/:propertyId" element={<CommercialDescription />}></Route>
          <Route exact path="/industrial" element={<Industrial />}></Route>
          <Route exact path="/industrial/description/:propertyId" element={<IndustrialDescription />}></Route>
          <Route exact path="/land" element={<Land />}></Route>
          <Route exact path="/land/description/:propertyId" element={<LandDescription />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
